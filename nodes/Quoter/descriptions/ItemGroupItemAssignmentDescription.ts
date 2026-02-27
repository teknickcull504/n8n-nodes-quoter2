import type { INodeProperties } from 'n8n-workflow';

export const itemGroupItemAssignmentOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['itemGroupItemAssignment'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create an assignment', action: 'Create an item group item assignment' },
			{ name: 'Delete', value: 'delete', description: 'Delete an assignment', action: 'Delete an item group item assignment' },
			{ name: 'Get', value: 'get', description: 'Get an assignment', action: 'Get an item group item assignment' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many assignments', action: 'Get many item group item assignments' },
		],
		default: 'getAll',
	},
];

export const itemGroupItemAssignmentFields: INodeProperties[] = [
	// create
	{
		displayName: 'Item Group ID',
		name: 'itemGroupId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['create'] } },
	},
	{
		displayName: 'Item ID',
		name: 'itemId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['create'] } },
	},

	// delete
	{
		displayName: 'Assignment ID',
		name: 'assignmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['delete'] } },
	},

	// get
	{
		displayName: 'Assignment ID',
		name: 'assignmentId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['get'] } },
	},

	// getAll
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['itemGroupItemAssignment'], operation: ['getAll'] } },
		options: [
			{ displayName: 'Item Group ID', name: 'item_group_id', type: 'string' as const, default: '' },
			{ displayName: 'Item ID', name: 'item_id', type: 'string' as const, default: '' },
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '' },
		],
	},
];
