import type { IExecuteFunctions, ILoadOptionsFunctions, IHookFunctions, IDataObject, IHttpRequestMethods } from 'n8n-workflow';
export declare function quoterApiRequest(this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject): Promise<any>;
export declare function quoterApiRequestAllItems(this: IExecuteFunctions | ILoadOptionsFunctions | IHookFunctions, method: IHttpRequestMethods, endpoint: string, body?: IDataObject, qs?: IDataObject): Promise<any[]>;
