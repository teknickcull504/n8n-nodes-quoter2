"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemTierFields = exports.itemTierOperations = void 0;
exports.itemTierOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['itemTier'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create an item tier', action: 'Create an item tier' },
            { name: 'Delete', value: 'delete', description: 'Delete an item tier', action: 'Delete an item tier' },
            { name: 'Get', value: 'get', description: 'Get an item tier', action: 'Get an item tier' },
            { name: 'Get Many', value: 'getAll', description: 'Get many item tiers', action: 'Get many item tiers' },
            { name: 'Update', value: 'update', description: 'Update an item tier', action: 'Update an item tier' },
        ],
        default: 'getAll',
    },
];
exports.itemTierFields = [
    // create
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemTier'], operation: ['create'] } },
    },
    {
        displayName: 'Quantity',
        name: 'quantity',
        type: 'number',
        required: true,
        default: 1,
        displayOptions: { show: { resource: ['itemTier'], operation: ['create'] } },
    },
    {
        displayName: 'Price',
        name: 'price_amount_decimal',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemTier'], operation: ['create'] } },
        description: 'Price amount as decimal string',
    },
    // delete
    {
        displayName: 'Item Tier ID',
        name: 'itemTierId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemTier'], operation: ['delete'] } },
    },
    // get
    {
        displayName: 'Item Tier ID',
        name: 'itemTierId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemTier'], operation: ['get'] } },
    },
    // getAll
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['itemTier'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['itemTier'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['itemTier'], operation: ['getAll'] } },
        options: [
            { displayName: 'Item ID', name: 'item_id', type: 'string', default: '' },
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '' },
        ],
    },
    // update
    {
        displayName: 'Item Tier ID',
        name: 'itemTierId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['itemTier'], operation: ['update'] } },
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['itemTier'], operation: ['update'] } },
        options: [
            { displayName: 'Price', name: 'price_amount_decimal', type: 'string', default: '' },
            { displayName: 'Quantity', name: 'quantity', type: 'number', default: 0 },
        ],
    },
];
//# sourceMappingURL=ItemTierDescription.js.map