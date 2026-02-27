"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lineItemFields = exports.lineItemOperations = void 0;
exports.lineItemOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['lineItem'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create a line item', action: 'Create a line item' },
        ],
        default: 'create',
    },
];
exports.lineItemFields = [
    {
        displayName: 'Quote ID',
        name: 'quoteId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['lineItem'], operation: ['create'] } },
        description: 'ID of the quote to add the line item to',
    },
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['lineItem'], operation: ['create'] } },
        description: 'ID of the item',
    },
    {
        displayName: 'Quantity',
        name: 'quantity',
        type: 'number',
        required: true,
        default: 1,
        displayOptions: { show: { resource: ['lineItem'], operation: ['create'] } },
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['lineItem'], operation: ['create'] } },
        options: [
            { displayName: 'Notes', name: 'notes', type: 'string', default: '' },
            { displayName: 'Price', name: 'price_amount_decimal', type: 'string', default: '', description: 'Override price as decimal string' },
        ],
    },
];
//# sourceMappingURL=LineItemDescription.js.map