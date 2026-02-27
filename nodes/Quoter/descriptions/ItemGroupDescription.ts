import type { INodeProperties } from 'n8n-workflow';

export const itemGroupOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['itemGroup'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create an item group', action: 'Create an item group' },
			{ name: 'Delete', value: 'delete', description: 'Delete an item group', action: 'Delete an item group' },
			{ name: 'Get', value: 'get', description: 'Get an item group', action: 'Get an item group' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many item groups', action: 'Get many item groups' },
			{ name: 'Update', value: 'update', description: 'Update an item group', action: 'Update an item group' },
		],
		default: 'getAll',
	},
];

export const itemGroupFields: INodeProperties[] = [
	// create
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroup'], operation: ['create'] } },
	},

	// delete
	{
		displayName: 'Item Group ID',
		name: 'itemGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroup'], operation: ['delete'] } },
	},

	// get
	{
		displayName: 'Item Group ID',
		name: 'itemGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroup'], operation: ['get'] } },
	},

	// getAll
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['itemGroup'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['itemGroup'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['itemGroup'], operation: ['getAll'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
			{ displayName: 'Name Contains', name: 'name[cont]', type: 'string' as const, default: '' },
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '' },
		],
	},

	// update
	{
		displayName: 'Item Group ID',
		name: 'itemGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroup'], operation: ['update'] } },
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['itemGroup'], operation: ['update'] } },
		options: [
			{ displayName: 'Name', name: 'name', type: 'string' as const, default: '' },
		],
	},
];
