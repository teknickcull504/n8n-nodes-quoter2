import type { INodeProperties } from 'n8n-workflow';

export const dataFeedOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['dataFeed'] } },
		options: [
			{ name: 'List Supplier Items', value: 'listSupplierItems', description: 'List supplier items by MPN', action: 'List data feed supplier items' },
			{ name: 'List Suppliers', value: 'listSuppliers', description: 'List data feed suppliers', action: 'List data feed suppliers' },
		],
		default: 'listSuppliers',
	},
];

export const dataFeedFields: INodeProperties[] = [
	// listSupplierItems
	{
		displayName: 'MPNs',
		name: 'mpns',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSupplierItems'] } },
		description: 'Comma-separated list of Manufacturer Part Numbers to search for',
	},
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSupplierItems'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSupplierItems'], returnAll: [false] } },
		description: 'Max number of results to return',
	},

	// listSuppliers
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSuppliers'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSuppliers'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['dataFeed'], operation: ['listSuppliers'] } },
		options: [
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '' },
		],
	},
];
