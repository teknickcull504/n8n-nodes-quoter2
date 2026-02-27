import type { INodeProperties } from 'n8n-workflow';

export const supplierOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['supplier'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create a supplier', action: 'Create a supplier' },
			{ name: 'Delete', value: 'delete', description: 'Delete a supplier', action: 'Delete a supplier' },
			{ name: 'Get', value: 'get', description: 'Get a supplier', action: 'Get a supplier' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many suppliers', action: 'Get many suppliers' },
			{ name: 'Update', value: 'update', description: 'Update a supplier', action: 'Update a supplier' },
		],
		default: 'getAll',
	},
];

const supplierOptionalFields: INodeProperties['options'] = [
	{ displayName: 'Contact Email', name: 'contact_email', type: 'string' as const, default: '' },
	{ displayName: 'Contact Phone', name: 'contact_phone', type: 'string' as const, default: '' },
	{ displayName: 'Website', name: 'website', type: 'string' as const, default: '' },
];

export const supplierFields: INodeProperties[] = [
	// create
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['supplier'], operation: ['create'] } },
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['supplier'], operation: ['create'] } },
		options: supplierOptionalFields,
	},

	// delete
	{
		displayName: 'Supplier ID',
		name: 'supplierId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['supplier'], operation: ['delete'] } },
	},

	// get
	{
		displayName: 'Supplier ID',
		name: 'supplierId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['supplier'], operation: ['get'] } },
	},

	// getAll
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['supplier'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['supplier'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['supplier'], operation: ['getAll'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
			{ displayName: 'Name Contains', name: 'name[cont]', type: 'string' as const, default: '' },
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '' },
		],
	},

	// update
	{
		displayName: 'Supplier ID',
		name: 'supplierId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['supplier'], operation: ['update'] } },
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['supplier'], operation: ['update'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
			...supplierOptionalFields,
		],
	},
];
