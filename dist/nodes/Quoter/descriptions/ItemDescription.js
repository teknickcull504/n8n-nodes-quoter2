"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itemFields = exports.itemOperations = void 0;
exports.itemOperations = [
    {
        displayName: 'Operation',
        name: 'operation',
        type: 'options',
        noDataExpression: true,
        displayOptions: { show: { resource: ['item'] } },
        options: [
            { name: 'Create', value: 'create', description: 'Create an item', action: 'Create an item' },
            { name: 'Delete', value: 'delete', description: 'Delete an item', action: 'Delete an item' },
            { name: 'Get', value: 'get', description: 'Get an item', action: 'Get an item' },
            { name: 'Get Many', value: 'getAll', description: 'Get many items', action: 'Get many items' },
            { name: 'Update', value: 'update', description: 'Update an item', action: 'Update an item' },
        ],
        default: 'getAll',
    },
];
const itemOptionalFields = [
    { displayName: 'Category ID', name: 'category_id', type: 'string', default: '', description: 'ID of the category' },
    { displayName: 'Description', name: 'description', type: 'string', default: '', description: 'Item description' },
    { displayName: 'Manufacturer ID', name: 'manufacturer_id', type: 'string', default: '', description: 'ID of the manufacturer' },
    { displayName: 'MPN', name: 'mpn', type: 'string', default: '', description: 'Manufacturer Part Number' },
    { displayName: 'Price', name: 'price_amount_decimal', type: 'string', default: '', description: 'Price amount as decimal string' },
    { displayName: 'SKU', name: 'sku', type: 'string', default: '', description: 'Stock Keeping Unit' },
    { displayName: 'Taxable', name: 'taxable', type: 'boolean', default: true, description: 'Whether the item is taxable' },
    { displayName: 'Weight', name: 'weight_decimal', type: 'string', default: '', description: 'Weight as decimal string' },
];
exports.itemFields = [
    // ----------------------------------
    //         item: create
    // ----------------------------------
    {
        displayName: 'Name',
        name: 'name',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['item'], operation: ['create'] } },
        description: 'Name of the item',
    },
    {
        displayName: 'Additional Fields',
        name: 'additionalFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['item'], operation: ['create'] } },
        options: itemOptionalFields,
    },
    // ----------------------------------
    //         item: delete
    // ----------------------------------
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['item'], operation: ['delete'] } },
        description: 'ID of the item to delete',
    },
    // ----------------------------------
    //         item: get
    // ----------------------------------
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['item'], operation: ['get'] } },
        description: 'ID of the item to retrieve',
    },
    // ----------------------------------
    //         item: getAll
    // ----------------------------------
    {
        displayName: 'Return All',
        name: 'returnAll',
        type: 'boolean',
        default: false,
        displayOptions: { show: { resource: ['item'], operation: ['getAll'] } },
        description: 'Whether to return all results or only up to a given limit',
    },
    {
        displayName: 'Limit',
        name: 'limit',
        type: 'number',
        default: 50,
        typeOptions: { minValue: 1, maxValue: 100 },
        displayOptions: { show: { resource: ['item'], operation: ['getAll'], returnAll: [false] } },
        description: 'Max number of results to return',
    },
    {
        displayName: 'Filters',
        name: 'filters',
        type: 'collection',
        placeholder: 'Add Filter',
        default: {},
        displayOptions: { show: { resource: ['item'], operation: ['getAll'] } },
        options: [
            { displayName: 'Category ID', name: 'category_id', type: 'string', default: '', description: 'Filter by category ID' },
            { displayName: 'Manufacturer ID', name: 'manufacturer_id', type: 'string', default: '', description: 'Filter by manufacturer ID' },
            { displayName: 'MPN', name: 'mpn', type: 'string', default: '', description: 'Filter by exact MPN' },
            { displayName: 'MPN Contains', name: 'mpn[cont]', type: 'string', default: '', description: 'Filter by MPN containing value' },
            { displayName: 'Name', name: 'name', type: 'string', default: '', description: 'Filter by exact name' },
            { displayName: 'Name Contains', name: 'name[cont]', type: 'string', default: '', description: 'Filter by name containing value' },
            { displayName: 'SKU', name: 'sku', type: 'string', default: '', description: 'Filter by exact SKU' },
            { displayName: 'SKU Contains', name: 'sku[cont]', type: 'string', default: '', description: 'Filter by SKU containing value' },
            { displayName: 'Sort By', name: 'sort_by', type: 'string', default: '', description: 'Field to sort by' },
        ],
    },
    // ----------------------------------
    //         item: update
    // ----------------------------------
    {
        displayName: 'Item ID',
        name: 'itemId',
        type: 'string',
        required: true,
        default: '',
        displayOptions: { show: { resource: ['item'], operation: ['update'] } },
        description: 'ID of the item to update',
    },
    {
        displayName: 'Update Fields',
        name: 'updateFields',
        type: 'collection',
        placeholder: 'Add Field',
        default: {},
        displayOptions: { show: { resource: ['item'], operation: ['update'] } },
        options: [
            { displayName: 'Name', name: 'name', type: 'string', default: '', description: 'Name of the item' },
            ...itemOptionalFields,
        ],
    },
];
//# sourceMappingURL=ItemDescription.js.map