import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class QuoterApi implements ICredentialType {
	name = 'quoterApi';
	displayName = 'Quoter API';
	documentationUrl = 'https://quotersoftware.github.io/docs/#quoter-api-reference';

	properties: INodeProperties[] = [
		{
			displayName: 'Client ID',
			name: 'clientId',
			type: 'string',
			default: '',
			required: true,
		},
		{
			displayName: 'Client Secret',
			name: 'clientSecret',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
		},
	];

	// Token management is handled in GenericFunctions.ts since Quoter
	// uses a non-standard OAuth2 client_credentials flow.
}
