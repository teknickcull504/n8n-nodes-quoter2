"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemOptionFields = exports.itemOptionOperations = void 0;
exports.itemOptionOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['itemOption'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create an item option', action: 'Create an item option' },
            { name: 'Delete', value: 'delete', description: 'Delete an item option', action: 'Delete an item option' },
            { name: 'Get', value: 'get', description: 'Get an item option', action: 'Get an item option' },
            { name: 'Get Many', value: 'getAll', description: 'Get many item options', action: 'Get many item options' },
            { name: 'Update', value: 'update', description: 'Update an item option', action: 'Update an item option' },
        ],
        default: 'getAll',
    },
];
exports.itemOptionFields = [
    // create
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOption'], operation: ['create'] } },
    },
    // delete
    {
        displayName: 'Item Option ID',
        name: 'itemOptionId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOption'], operation: ['delete'] } },
    },
    // get
    {
        displayName: 'Item Option ID',
        name: 'itemOptionId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOption'], operation: ['get'] } },
    },
    // getAll
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['itemOption'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['itemOption'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['itemOption'], operation: ['getAll'] } },
        options: [
            { displayName: 'Name', name: 'name', type: 'string', default: '' },
            { displayName: 'Name Contains', name: 'name[cont]', type: 'string', default: '' },
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '' },
        ],
    },
    // update
    {
        displayName: 'Item Option ID',
        name: 'itemOptionId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemOption'], operation: ['update'] } },
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['itemOption'], operation: ['update'] } },
        options: [
            { displayName: 'Name', name: 'name', type: 'string', default: '' },
        ],
    },
];
//# sourceMappingURL=ItemOptionDescription.js.map