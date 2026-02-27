import type { INodeProperties } from 'n8n-workflow';

export const manufacturerOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['manufacturer'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create a manufacturer', action: 'Create a manufacturer' },
			{ name: 'Delete', value: 'delete', description: 'Delete a manufacturer', action: 'Delete a manufacturer' },
			{ name: 'Get', value: 'get', description: 'Get a manufacturer', action: 'Get a manufacturer' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many manufacturers', action: 'Get many manufacturers' },
			{ name: 'Update', value: 'update', description: 'Update a manufacturer', action: 'Update a manufacturer' },
		],
		default: 'getAll',
	},
];

export const manufacturerFields: INodeProperties[] = [
	// create
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['manufacturer'], operation: ['create'] } },
		description: 'Name of the manufacturer',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['manufacturer'], operation: ['create'] } },
		options: [
			{ displayName: 'Website', name: 'website', type: 'string' as const, default: '', description: 'Manufacturer website URL' },
		],
	},

	// delete
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['manufacturer'], operation: ['delete'] } },
	},

	// get
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['manufacturer'], operation: ['get'] } },
	},

	// getAll
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['manufacturer'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['manufacturer'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['manufacturer'], operation: ['getAll'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
			{ displayName: 'Name Contains', name: 'name[cont]', type: 'string' as const, default: '' },
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '' },
		],
	},

	// update
	{
		displayName: 'Manufacturer ID',
		name: 'manufacturerId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['manufacturer'], operation: ['update'] } },
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['manufacturer'], operation: ['update'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
			{ displayName: 'Website', name: 'website', type: 'string' as const, default: '' },
		],
	},
];
