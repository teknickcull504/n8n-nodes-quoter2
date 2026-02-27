"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteFields = exports.quoteOperations = void 0;
exports.quoteOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['quote'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create a quote', action: 'Create a quote' },
            { name: 'Get Many', value: 'getAll', description: 'Get many quotes', action: 'Get many quotes' },
        ],
        default: 'getAll',
    },
];
exports.quoteFields = [
    // ----------------------------------
    //         quote: create
    // ----------------------------------
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['quote'], operation: ['create'] } },
        description: 'Name of the quote',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['quote'], operation: ['create'] } },
        options: [
            { displayName: 'Contact ID', name: 'contact_id', type: 'string', default: '', description: 'ID of the contact for this quote' },
            { displayName: 'Quote Number', name: 'quote_number', type: 'string', default: '', description: 'Custom quote number' },
            { displayName: 'Status', name: 'status', type: 'string', default: '', description: 'Status of the quote' },
            { displayName: 'Total Amount', name: 'total_amount_decimal', type: 'string', default: '', description: 'Total amount as decimal string' },
        ],
    },
    // ----------------------------------
    //         quote: getAll
    // ----------------------------------
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['quote'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['quote'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['quote'], operation: ['getAll'] } },
        options: [
            { displayName: 'Contact ID', name: 'contact_id', type: 'string', default: '', description: 'Filter by contact ID' },
            { displayName: 'Name', name: 'name', type: 'string', default: '', description: 'Filter by exact name' },
            { displayName: 'Name Contains', name: 'name[cont]', type: 'string', default: '', description: 'Filter by name containing value' },
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '', description: 'Field to sort by' },
        ],
    },
];
//# sourceMappingURL=QuoteDescription.js.map