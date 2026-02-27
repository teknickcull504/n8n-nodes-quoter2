"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemOptionValueFields = exports.itemOptionValueOperations = void 0;
exports.itemOptionValueOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['itemOptionValue'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create an item option value', action: 'Create an item option value' },
            { name: 'Delete', value: 'delete', description: 'Delete an item option value', action: 'Delete an item option value' },
            { name: 'Get', value: 'get', description: 'Get an item option value', action: 'Get an item option value' },
            { name: 'Get Many', value: 'getAll', description: 'Get many item option values', action: 'Get many item option values' },
            { name: 'Update', value: 'update', description: 'Update an item option value', action: 'Update an item option value' },
        ],
        default: 'getAll',
    },
];
exports.itemOptionValueFields = [
    // create
    {
        displayName: 'Item Option ID',
        name: 'itemOptionId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['create'] } },
    },
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['create'] } },
    },
    // delete
    {
        displayName: 'Item Option Value ID',
        name: 'itemOptionValueId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['delete'] } },
    },
    // get
    {
        displayName: 'Item Option Value ID',
        name: 'itemOptionValueId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['get'] } },
    },
    // getAll
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['getAll'] } },
        options: [
            { displayName: 'Item Option ID', name: 'item_option_id', type: 'string', default: '' },
            { displayName: 'Name', name: 'name', type: 'string', default: '' },
            { displayName: 'Name Contains', name: 'name[cont]', type: 'string', default: '' },
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '' },
        ],
    },
    // update
    {
        displayName: 'Item Option Value ID',
        name: 'itemOptionValueId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['update'] } },
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['itemOptionValue'], operation: ['update'] } },
        options: [
            { displayName: 'Item Option ID', name: 'item_option_id', type: 'string', default: '' },
            { displayName: 'Name', name: 'name', type: 'string', default: '' },
        ],
    },
];
//# sourceMappingURL=ItemOptionValueDescription.js.map