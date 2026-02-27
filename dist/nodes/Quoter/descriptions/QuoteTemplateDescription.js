"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.quoteTemplateFields = exports.quoteTemplateOperations = void 0;
exports.quoteTemplateOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['quoteTemplate'] } },
        options: [
            { name: 'Get Many', value: 'getAll', description: 'Get many quote templates', action: 'Get many quote templates' },
        ],
        default: 'getAll',
    },
];
exports.quoteTemplateFields = [
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['quoteTemplate'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['quoteTemplate'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['quoteTemplate'], operation: ['getAll'] } },
        options: [
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '' },
        ],
    },
];
//# sourceMappingURL=QuoteTemplateDescription.js.map