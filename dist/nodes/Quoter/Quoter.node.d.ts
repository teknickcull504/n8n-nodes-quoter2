import type { IExecuteFunctions, ILoadOptionsFunctions, INodeExecutionData, INodePropertyOptions, INodeType, INodeTypeDescription } from 'n8n-workflow';
export declare class Quoter implements INodeType {
    description: INodeTypeDescription;
    methods: {
        loadOptions: {
            getQuoteTemplates(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]>;
        };
    };
    execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]>;
}
