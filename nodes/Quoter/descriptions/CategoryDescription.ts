import type { INodeProperties } from 'n8n-workflow';

export const categoryOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['category'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create a category', action: 'Create a category' },
			{ name: 'Delete', value: 'delete', description: 'Delete a category', action: 'Delete a category' },
			{ name: 'Get', value: 'get', description: 'Get a category', action: 'Get a category' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many categories', action: 'Get many categories' },
			{ name: 'Update', value: 'update', description: 'Update a category', action: 'Update a category' },
		],
		default: 'getAll',
	},
];

export const categoryFields: INodeProperties[] = [
	// ----------------------------------
	//         category: create
	// ----------------------------------
	{
		displayName: 'Name',
		name: 'name',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['category'], operation: ['create'] } },
		description: 'Name of the category',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['category'], operation: ['create'] } },
		options: [
			{
				displayName: 'Parent Category ID',
				name: 'parent_category_id',
				type: 'string',
				default: '',
				description: 'ID of the parent category',
			},
			{
				displayName: 'Parent Category',
				name: 'parent_category',
				type: 'string',
				default: '',
				description: 'Name of the parent category',
			},
		],
	},

	// ----------------------------------
	//         category: delete
	// ----------------------------------
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['category'], operation: ['delete'] } },
		description: 'ID of the category to delete',
	},

	// ----------------------------------
	//         category: get
	// ----------------------------------
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['category'], operation: ['get'] } },
		description: 'ID of the category to retrieve',
	},

	// ----------------------------------
	//         category: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['category'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['category'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['category'], operation: ['getAll'] } },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Filter by exact name',
			},
			{
				displayName: 'Name Contains',
				name: 'name[cont]',
				type: 'string',
				default: '',
				description: 'Filter by name containing this value',
			},
			{
				displayName: 'Parent Category ID',
				name: 'parent_category_id',
				type: 'string',
				default: '',
				description: 'Filter by parent category ID',
			},
			{
				displayName: 'Sort By',
				name: 'sort_by',
				type: 'string',
				default: '',
				description: 'Field to sort by',
			},
		],
	},

	// ----------------------------------
	//         category: update
	// ----------------------------------
	{
		displayName: 'Category ID',
		name: 'categoryId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['category'], operation: ['update'] } },
		description: 'ID of the category to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['category'], operation: ['update'] } },
		options: [
			{
				displayName: 'Name',
				name: 'name',
				type: 'string',
				default: '',
				description: 'Name of the category',
			},
			{
				displayName: 'Parent Category ID',
				name: 'parent_category_id',
				type: 'string',
				default: '',
				description: 'ID of the parent category',
			},
			{
				displayName: 'Parent Category',
				name: 'parent_category',
				type: 'string',
				default: '',
				description: 'Name of the parent category',
			},
		],
	},
];
