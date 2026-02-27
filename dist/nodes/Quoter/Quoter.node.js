"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Quoter = void 0;
const GenericFunctions_1 = require("./GenericFunctions");
const descriptions_1 = require("./descriptions");
class Quoter {
    constructor() {
        this.description = {
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
                ...descriptions_1.categoryOperations,
                ...descriptions_1.categoryFields,
                ...descriptions_1.contactOperations,
                ...descriptions_1.contactFieldDefinitions,
                ...descriptions_1.dataFeedOperations,
                ...descriptions_1.dataFeedFields,
                ...descriptions_1.itemOperations,
                ...descriptions_1.itemFields,
                ...descriptions_1.itemGroupOperations,
                ...descriptions_1.itemGroupFields,
                ...descriptions_1.itemGroupItemAssignmentOperations,
                ...descriptions_1.itemGroupItemAssignmentFields,
                ...descriptions_1.itemOptionOperations,
                ...descriptions_1.itemOptionFields,
                ...descriptions_1.itemOptionValueOperations,
                ...descriptions_1.itemOptionValueFields,
                ...descriptions_1.itemTierOperations,
                ...descriptions_1.itemTierFields,
                ...descriptions_1.lineItemOperations,
                ...descriptions_1.lineItemFields,
                ...descriptions_1.manufacturerOperations,
                ...descriptions_1.manufacturerFields,
                ...descriptions_1.quoteOperations,
                ...descriptions_1.quoteFields,
                ...descriptions_1.quoteTemplateOperations,
                ...descriptions_1.quoteTemplateFields,
                ...descriptions_1.supplierOperations,
                ...descriptions_1.supplierFields,
            ],
        };
    }
    async execute() {
        const items = this.getInputData();
        const returnData = [];
        const resource = this.getNodeParameter('resource', 0);
        const operation = this.getNodeParameter('operation', 0);
        for (let i = 0; i < items.length; i++) {
            try {
                let responseData;
                // ============================================================
                //                        CATEGORY
                // ============================================================
                if (resource === 'category') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/categories', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('categoryId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/categories/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('categoryId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/categories/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/categories', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/categories', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('categoryId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/categories/${id}`, body);
                    }
                }
                // ============================================================
                //                        CONTACT
                // ============================================================
                if (resource === 'contact') {
                    if (operation === 'create') {
                        const body = {
                            email: this.getNodeParameter('email', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/contacts', body);
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('contactId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/contacts/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/contacts', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/contacts', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('contactId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/contacts/${id}`, body);
                    }
                }
                // ============================================================
                //                       DATA FEED
                // ============================================================
                if (resource === 'dataFeed') {
                    if (operation === 'listSupplierItems') {
                        const mpnsRaw = this.getNodeParameter('mpns', i);
                        const mpns = mpnsRaw.split(',').map((m) => m.trim());
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const qs = { mpns };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/datafeeds/supplier_items', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/datafeeds/supplier_items', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'listSuppliers') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/datafeeds/suppliers', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/datafeeds/suppliers', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                }
                // ============================================================
                //                         ITEM
                // ============================================================
                if (resource === 'item') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/items', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('itemId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/items/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('itemId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/items/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/items', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/items', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('itemId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/items/${id}`, body);
                    }
                }
                // ============================================================
                //                       ITEM GROUP
                // ============================================================
                if (resource === 'itemGroup') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/item_groups', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('itemGroupId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/item_groups/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('itemGroupId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/item_groups/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/item_groups', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/item_groups', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('itemGroupId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/item_groups/${id}`, body);
                    }
                }
                // ============================================================
                //               ITEM GROUP ITEM ASSIGNMENT
                // ============================================================
                if (resource === 'itemGroupItemAssignment') {
                    if (operation === 'create') {
                        const body = {
                            item_group_id: this.getNodeParameter('itemGroupId', i),
                            item_id: this.getNodeParameter('itemId', i),
                        };
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/item_group_item_assignments', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('assignmentId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/item_group_item_assignments/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('assignmentId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/item_group_item_assignments/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/item_group_item_assignments', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/item_group_item_assignments', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                }
                // ============================================================
                //                      ITEM OPTION
                // ============================================================
                if (resource === 'itemOption') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/item_options', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('itemOptionId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/item_options/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('itemOptionId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/item_options/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/item_options', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/item_options', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('itemOptionId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/item_options/${id}`, body);
                    }
                }
                // ============================================================
                //                   ITEM OPTION VALUE
                // ============================================================
                if (resource === 'itemOptionValue') {
                    if (operation === 'create') {
                        const body = {
                            item_option_id: this.getNodeParameter('itemOptionId', i),
                            name: this.getNodeParameter('name', i),
                        };
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/item_option_values', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('itemOptionValueId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/item_option_values/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('itemOptionValueId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/item_option_values/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/item_option_values', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/item_option_values', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('itemOptionValueId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/item_option_values/${id}`, body);
                    }
                }
                // ============================================================
                //                       ITEM TIER
                // ============================================================
                if (resource === 'itemTier') {
                    if (operation === 'create') {
                        const body = {
                            item_id: this.getNodeParameter('itemId', i),
                            quantity: this.getNodeParameter('quantity', i),
                            price_amount_decimal: this.getNodeParameter('price_amount_decimal', i),
                        };
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/item_tiers', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('itemTierId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/item_tiers/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('itemTierId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/item_tiers/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/item_tiers', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/item_tiers', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('itemTierId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/item_tiers/${id}`, body);
                    }
                }
                // ============================================================
                //                       LINE ITEM
                // ============================================================
                if (resource === 'lineItem') {
                    if (operation === 'create') {
                        const body = {
                            quote_id: this.getNodeParameter('quoteId', i),
                            item_id: this.getNodeParameter('itemId', i),
                            quantity: this.getNodeParameter('quantity', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/line_items', body);
                    }
                }
                // ============================================================
                //                      MANUFACTURER
                // ============================================================
                if (resource === 'manufacturer') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/manufacturers', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('manufacturerId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/manufacturers/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('manufacturerId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/manufacturers/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/manufacturers', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/manufacturers', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('manufacturerId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/manufacturers/${id}`, body);
                    }
                }
                // ============================================================
                //                         QUOTE
                // ============================================================
                if (resource === 'quote') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/quotes', body);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/quotes', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/quotes', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                }
                // ============================================================
                //                    QUOTE TEMPLATE
                // ============================================================
                if (resource === 'quoteTemplate') {
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/quote_templates', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/quote_templates', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                }
                // ============================================================
                //                        SUPPLIER
                // ============================================================
                if (resource === 'supplier') {
                    if (operation === 'create') {
                        const body = {
                            name: this.getNodeParameter('name', i),
                        };
                        Object.assign(body, this.getNodeParameter('additionalFields', i));
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'POST', '/suppliers', body);
                    }
                    if (operation === 'delete') {
                        const id = this.getNodeParameter('supplierId', i);
                        await GenericFunctions_1.quoterApiRequest.call(this, 'DELETE', `/suppliers/${id}`);
                        responseData = { success: true };
                    }
                    if (operation === 'get') {
                        const id = this.getNodeParameter('supplierId', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', `/suppliers/${id}`);
                    }
                    if (operation === 'getAll') {
                        const returnAll = this.getNodeParameter('returnAll', i);
                        const filters = this.getNodeParameter('filters', i);
                        const qs = { ...filters };
                        if (returnAll) {
                            responseData = await GenericFunctions_1.quoterApiRequestAllItems.call(this, 'GET', '/suppliers', {}, qs);
                        }
                        else {
                            qs.limit = this.getNodeParameter('limit', i);
                            const response = await GenericFunctions_1.quoterApiRequest.call(this, 'GET', '/suppliers', {}, qs);
                            responseData = response.data || response;
                        }
                    }
                    if (operation === 'update') {
                        const id = this.getNodeParameter('supplierId', i);
                        const body = this.getNodeParameter('updateFields', i);
                        responseData = await GenericFunctions_1.quoterApiRequest.call(this, 'PATCH', `/suppliers/${id}`, body);
                    }
                }
                // Normalize response to array
                const executionData = this.helpers.constructExecutionMetaData(this.helpers.returnJsonArray(responseData), { itemData: { item: i } });
                returnData.push(...executionData);
            }
            catch (error) {
                if (this.continueOnFail()) {
                    returnData.push({
                        json: { error: error.message },
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
exports.Quoter = Quoter;
//# sourceMappingURL=Quoter.node.js.map