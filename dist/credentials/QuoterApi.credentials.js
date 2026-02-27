"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuoterApi = void 0;
class QuoterApi {
    constructor() {
        this.name = 'quoterApi';
        this.displayName = 'Quoter API';
        this.documentationUrl = 'https://quotersoftware.github.io/docs/#quoter-api-reference';
        this.properties = [
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
}
exports.QuoterApi = QuoterApi;
//# sourceMappingURL=QuoterApi.credentials.js.map