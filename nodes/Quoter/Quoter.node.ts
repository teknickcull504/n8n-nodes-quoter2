import type {
	IExecuteFunctions,
	ILoadOptionsFunctions,
	INodeExecutionData,
	INodePropertyOptions,
	INodeType,
	INodeTypeDescription,
	IDataObject,
} from 'n8n-workflow';

import { quoterApiRequest, quoterApiRequestAllItems } from './GenericFunctions';

import {
	categoryOperations,
	categoryFields,
	contactOperations,
	contactFieldDefinitions,
	dataFeedOperations,
	dataFeedFields,
	itemOperations,
	itemFields,
	itemGroupOperations,
	itemGroupFields,
	itemGroupItemAssignmentOperations,
	itemGroupItemAssignmentFields,
	itemOptionOperations,
	itemOptionFields,
	itemOptionValueOperations,
	itemOptionValueFields,
	itemTierOperations,
	itemTierFields,
	lineItemOperations,
	lineItemFields,
	manufacturerOperations,
	manufacturerFields,
	quoteOperations,
	quoteFields,
	quoteTemplateOperations,
	quoteTemplateFields,
	supplierOperations,
	supplierFields,
} from './descriptions';

export class Quoter implements INodeType {
	description: INodeTypeDescription = {
		displayName: 'Quoter',
		name: 'quoter',
		icon: 'file:quoter.svg',
		group: ['transform'],
		version: 1,
		subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
		description: 'Interact with the Quoter quoting software API',
		defaults: {
			name: 'Quoter',
		},
		inputs: ['main'],
		outputs: ['main'],
		credentials: [
			{
				name: 'quoterApi',
				required: true,
			},
		],
		properties: [
			{
				displayName: 'Resource',
				name: 'resource',
				type: 'options',
				noDataExpression: true,
				options: [
					{ name: 'Category', value: 'category' },
					{ name: 'Contact', value: 'contact' },
					{ name: 'Data Feed', value: 'dataFeed' },
					{ name: 'Item', value: 'item' },
					{ name: 'Item Group', value: 'itemGroup' },
					{ name: 'Item Group Item Assignment', value: 'itemGroupItemAssignment' },
					{ name: 'Item Option', value: 'itemOption' },
					{ name: 'Item Option Value', value: 'itemOptionValue' },
					{ name: 'Item Tier', value: 'itemTier' },
					{ name: 'Line Item', value: 'lineItem' },
					{ name: 'Manufacturer', value: 'manufacturer' },
					{ name: 'Quote', value: 'quote' },
					{ name: 'Quote Template', value: 'quoteTemplate' },
					{ name: 'Supplier', value: 'supplier' },
				],
				default: 'quote',
			},
			...categoryOperations,
			...categoryFields,
			...contactOperations,
			...contactFieldDefinitions,
			...dataFeedOperations,
			...dataFeedFields,
			...itemOperations,
			...itemFields,
			...itemGroupOperations,
			...itemGroupFields,
			...itemGroupItemAssignmentOperations,
			...itemGroupItemAssignmentFields,
			...itemOptionOperations,
			...itemOptionFields,
			...itemOptionValueOperations,
			...itemOptionValueFields,
			...itemTierOperations,
			...itemTierFields,
			...lineItemOperations,
			...lineItemFields,
			...manufacturerOperations,
			...manufacturerFields,
			...quoteOperations,
			...quoteFields,
			...quoteTemplateOperations,
			...quoteTemplateFields,
			...supplierOperations,
			...supplierFields,
		],
	};

	methods = {
		loadOptions: {
			async getQuoteTemplates(this: ILoadOptionsFunctions): Promise<INodePropertyOptions[]> {
				const response = await quoterApiRequestAllItems.call(this, 'GET', '/quote_templates');
				return (response as Array<{ id: string; name: string }>).map((t) => ({
					name: t.name,
					value: t.id,
				}));
			},
		},
	};

	async execute(this: IExecuteFunctions): Promise<INodeExecutionData[][]> {
		const items = this.getInputData();
		const returnData: INodeExecutionData[] = [];

		const resource = this.getNodeParameter('resource', 0) as string;
		const operation = this.getNodeParameter('operation', 0) as string;

		for (let i = 0; i < items.length; i++) {
			try {
				let responseData: any;

				// ============================================================
				//                        CATEGORY
				// ============================================================
				if (resource === 'category') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/categories', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('categoryId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/categories/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('categoryId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/categories/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(this, 'GET', '/categories', {}, qs);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/categories', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('categoryId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/categories/${id}`, body);
					}
				}

				// ============================================================
				//                        CONTACT
				// ============================================================
				if (resource === 'contact') {
					if (operation === 'create') {
						const body: IDataObject = {
							email: this.getNodeParameter('email', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/contacts', body);
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('contactId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/contacts/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(this, 'GET', '/contacts', {}, qs);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/contacts', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('contactId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/contacts/${id}`, body);
					}
				}

				// ============================================================
				//                       DATA FEED
				// ============================================================
				if (resource === 'dataFeed') {
					if (operation === 'listSupplierItems') {
						const mpnsRaw = this.getNodeParameter('mpns', i) as string;
						const mpns = mpnsRaw.split(',').map((m) => m.trim());
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const qs: IDataObject = { mpns };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/datafeeds/supplier_items',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(
								this,
								'GET',
								'/datafeeds/supplier_items',
								{},
								qs,
							);
							responseData = response.data || response;
						}
					}

					if (operation === 'listSuppliers') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/datafeeds/suppliers',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(
								this,
								'GET',
								'/datafeeds/suppliers',
								{},
								qs,
							);
							responseData = response.data || response;
						}
					}
				}

				// ============================================================
				//                         ITEM
				// ============================================================
				if (resource === 'item') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/items', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('itemId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/items/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('itemId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/items/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(this, 'GET', '/items', {}, qs);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/items', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('itemId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/items/${id}`, body);
					}
				}

				// ============================================================
				//                       ITEM GROUP
				// ============================================================
				if (resource === 'itemGroup') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						responseData = await quoterApiRequest.call(this, 'POST', '/item_groups', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('itemGroupId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/item_groups/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('itemGroupId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/item_groups/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(this, 'GET', '/item_groups', {}, qs);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/item_groups', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('itemGroupId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/item_groups/${id}`, body);
					}
				}

				// ============================================================
				//               ITEM GROUP ITEM ASSIGNMENT
				// ============================================================
				if (resource === 'itemGroupItemAssignment') {
					if (operation === 'create') {
						const body: IDataObject = {
							item_group_id: this.getNodeParameter('itemGroupId', i) as string,
							item_id: this.getNodeParameter('itemId', i) as string,
						};
						responseData = await quoterApiRequest.call(
							this,
							'POST',
							'/item_group_item_assignments',
							body,
						);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('assignmentId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/item_group_item_assignments/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('assignmentId', i) as string;
						responseData = await quoterApiRequest.call(
							this,
							'GET',
							`/item_group_item_assignments/${id}`,
						);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/item_group_item_assignments',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(
								this,
								'GET',
								'/item_group_item_assignments',
								{},
								qs,
							);
							responseData = response.data || response;
						}
					}
				}

				// ============================================================
				//                      ITEM OPTION
				// ============================================================
				if (resource === 'itemOption') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						responseData = await quoterApiRequest.call(this, 'POST', '/item_options', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('itemOptionId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/item_options/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('itemOptionId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/item_options/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/item_options',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/item_options', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('itemOptionId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/item_options/${id}`, body);
					}
				}

				// ============================================================
				//                   ITEM OPTION VALUE
				// ============================================================
				if (resource === 'itemOptionValue') {
					if (operation === 'create') {
						const body: IDataObject = {
							item_option_id: this.getNodeParameter('itemOptionId', i) as string,
							name: this.getNodeParameter('name', i) as string,
						};
						responseData = await quoterApiRequest.call(this, 'POST', '/item_option_values', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('itemOptionValueId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/item_option_values/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('itemOptionValueId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/item_option_values/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/item_option_values',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(
								this,
								'GET',
								'/item_option_values',
								{},
								qs,
							);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('itemOptionValueId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(
							this,
							'PATCH',
							`/item_option_values/${id}`,
							body,
						);
					}
				}

				// ============================================================
				//                       ITEM TIER
				// ============================================================
				if (resource === 'itemTier') {
					if (operation === 'create') {
						const body: IDataObject = {
							item_id: this.getNodeParameter('itemId', i) as string,
							quantity: this.getNodeParameter('quantity', i) as number,
							price_amount_decimal: this.getNodeParameter('price_amount_decimal', i) as string,
						};
						responseData = await quoterApiRequest.call(this, 'POST', '/item_tiers', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('itemTierId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/item_tiers/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('itemTierId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/item_tiers/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/item_tiers',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/item_tiers', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('itemTierId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/item_tiers/${id}`, body);
					}
				}

				// ============================================================
				//                       LINE ITEM
				// ============================================================
				if (resource === 'lineItem') {
					if (operation === 'create') {
						const body: IDataObject = {
							quote_id: this.getNodeParameter('quoteId', i) as string,
							item_id: this.getNodeParameter('itemId', i) as string,
							quantity: this.getNodeParameter('quantity', i) as number,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/line_items', body);
					}
				}

				// ============================================================
				//                      MANUFACTURER
				// ============================================================
				if (resource === 'manufacturer') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/manufacturers', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('manufacturerId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/manufacturers/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('manufacturerId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/manufacturers/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/manufacturers',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/manufacturers', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('manufacturerId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(
							this,
							'PATCH',
							`/manufacturers/${id}`,
							body,
						);
					}
				}

				// ============================================================
				//                         QUOTE
				// ============================================================
				if (resource === 'quote') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
							template_id: this.getNodeParameter('template_id', i) as string,
							currency_abbr: this.getNodeParameter('currency_abbr', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/quotes', body);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(this, 'GET', '/quotes', {}, qs);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/quotes', {}, qs);
							responseData = response.data || response;
						}
					}
				}

				// ============================================================
				//                    QUOTE TEMPLATE
				// ============================================================
				if (resource === 'quoteTemplate') {
					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/quote_templates',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(
								this,
								'GET',
								'/quote_templates',
								{},
								qs,
							);
							responseData = response.data || response;
						}
					}
				}

				// ============================================================
				//                        SUPPLIER
				// ============================================================
				if (resource === 'supplier') {
					if (operation === 'create') {
						const body: IDataObject = {
							name: this.getNodeParameter('name', i) as string,
						};
						Object.assign(body, this.getNodeParameter('additionalFields', i) as IDataObject);
						responseData = await quoterApiRequest.call(this, 'POST', '/suppliers', body);
					}

					if (operation === 'delete') {
						const id = this.getNodeParameter('supplierId', i) as string;
						await quoterApiRequest.call(this, 'DELETE', `/suppliers/${id}`);
						responseData = { success: true };
					}

					if (operation === 'get') {
						const id = this.getNodeParameter('supplierId', i) as string;
						responseData = await quoterApiRequest.call(this, 'GET', `/suppliers/${id}`);
					}

					if (operation === 'getAll') {
						const returnAll = this.getNodeParameter('returnAll', i) as boolean;
						const filters = this.getNodeParameter('filters', i) as IDataObject;
						const qs: IDataObject = { ...filters };

						if (returnAll) {
							responseData = await quoterApiRequestAllItems.call(
								this,
								'GET',
								'/suppliers',
								{},
								qs,
							);
						} else {
							qs.limit = this.getNodeParameter('limit', i) as number;
							const response = await quoterApiRequest.call(this, 'GET', '/suppliers', {}, qs);
							responseData = response.data || response;
						}
					}

					if (operation === 'update') {
						const id = this.getNodeParameter('supplierId', i) as string;
						const body = this.getNodeParameter('updateFields', i) as IDataObject;
						responseData = await quoterApiRequest.call(this, 'PATCH', `/suppliers/${id}`, body);
					}
				}

				// Normalize response to array
				const executionData = this.helpers.constructExecutionMetaData(
					this.helpers.returnJsonArray(responseData as IDataObject | IDataObject[]),
					{ itemData: { item: i } },
				);
				returnData.push(...executionData);
			} catch (error) {
				if (this.continueOnFail()) {
					returnData.push({
						json: { error: (error as Error).message },
						pairedItem: { item: i },
					});
					continue;
				}
				throw error;
			}
		}

		return [returnData];
	}
}
