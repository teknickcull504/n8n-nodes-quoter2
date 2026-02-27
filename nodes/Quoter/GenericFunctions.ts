import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	IHookFunctions,
	IDataObject,
	JsonObject,
	IHttpRequestMethods,
	IHttpRequestOptions,
} from 'n8n-workflow';
import { NodeApiError } from 'n8n-workflow';

const BASE_URL = 'https://api.quoter.com/v1';

// Simple in-memory token cache keyed by credential hash
const tokenCache: Map<string, { accessToken: string; expiresAt: number; refreshToken: string }> =
	new Map();

function getCredentialHash(clientId: string): string {
	return clientId;
}

async function getAccessToken(
	self: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
): Promise<string> {
	const credentials = await self.getCredentials('quoterApi');
	const clientId = credentials.clientId as string;
	const clientSecret = credentials.clientSecret as string;
	const hash = getCredentialHash(clientId);

	const cached = tokenCache.get(hash);

	// Return cached token if still valid (with 60s buffer)
	if (cached && cached.expiresAt > Date.now() + 60_000) {
		return cached.accessToken;
	}

	// Try refresh if we have a refresh token
	if (cached?.refreshToken) {
		try {
			const refreshResponse = await self.helpers.httpRequest({
				method: 'POST',
				url: `${BASE_URL}/auth/refresh`,
				headers: {
					Authorization: `Bearer ${cached.refreshToken}`,
				},
				json: true,
			});

			tokenCache.set(hash, {
				accessToken: refreshResponse.access_token,
				refreshToken: refreshResponse.refresh_token,
				expiresAt: Date.now() + 55 * 60 * 1000, // ~55 minutes
			});

			return refreshResponse.access_token;
		} catch {
			// Refresh failed, fall through to full auth
		}
	}

	// Full authentication
	const authResponse = await self.helpers.httpRequest({
		method: 'POST',
		url: `${BASE_URL}/auth/oauth/authorize`,
		body: {
			client_id: clientId,
			client_secret: clientSecret,
			grant_type: 'client_credentials',
		},
		json: true,
	});

	tokenCache.set(hash, {
		accessToken: authResponse.access_token,
		refreshToken: authResponse.refresh_token,
		expiresAt: Date.now() + 55 * 60 * 1000,
	});

	return authResponse.access_token;
}

export async function quoterApiRequest(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<any> {
	const accessToken = await getAccessToken(this);

	const options: IHttpRequestOptions = {
		method,
		url: `${BASE_URL}${endpoint}`,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
		qs,
		json: true,
	};

	if (Object.keys(body).length > 0) {
		options.body = body;
	}

	try {
		return await this.helpers.httpRequest(options);
	} catch (error) {
		throw new NodeApiError(this.getNode(), error as JsonObject);
	}
}

export async function quoterApiRequestAllItems(
	this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions,
	method: IHttpRequestMethods,
	endpoint: string,
	body: IDataObject = {},
	qs: IDataObject = {},
): Promise<any[]> {
	const allItems: any[] = [];
	let page = 1;
	const limit = (qs.limit as number) || 100;
	qs.limit = limit;

	let hasMore = true;
	while (hasMore) {
		qs.page = page;
		const response = await quoterApiRequest.call(this, method, endpoint, body, qs);

		let items: any[] = [];
		if (Array.isArray(response.data)) {
			items = response.data;
		} else if (Array.isArray(response)) {
			items = response;
		}

		allItems.push(...items);

		// Stop if: API says no more, returned fewer items than limit, or no items returned
		if (response.has_more === false || items.length < limit || items.length === 0) {
			hasMore = false;
		} else {
			page++;
		}
	}

	return allItems;
}
