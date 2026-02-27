import type { INodeProperties } from 'n8n-workflow';

export const contactOperations: INodeProperties[] = [
	{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: { show: { resource: ['contact'] } },
		options: [
			{ name: 'Create', value: 'create', description: 'Create a contact', action: 'Create a contact' },
			{ name: 'Get', value: 'get', description: 'Get a contact', action: 'Get a contact' },
			{ name: 'Get Many', value: 'getAll', description: 'Get many contacts', action: 'Get many contacts' },
			{ name: 'Update', value: 'update', description: 'Update a contact', action: 'Update a contact' },
		],
		default: 'getAll',
	},
];

const contactFields: INodeProperties['options'] = [
	{ displayName: 'First Name', name: 'first_name', type: 'string' as const, default: '' },
	{ displayName: 'Last Name', name: 'last_name', type: 'string' as const, default: '' },
	{ displayName: 'Email', name: 'email', type: 'string' as const, placeholder: 'name@email.com', default: '' },
	{ displayName: 'Organization', name: 'organization', type: 'string' as const, default: '' },
	{ displayName: 'Title', name: 'title', type: 'string' as const, default: '' },
	{ displayName: 'Mobile Phone', name: 'mobile_phone', type: 'string' as const, default: '' },
	{ displayName: 'Work Phone', name: 'work_phone', type: 'string' as const, default: '' },
	{ displayName: 'Website', name: 'website', type: 'string' as const, default: '' },
	{ displayName: 'Billing Address', name: 'billing_address', type: 'string' as const, default: '' },
	{ displayName: 'Billing Address 2', name: 'billing_address2', type: 'string' as const, default: '' },
	{ displayName: 'Billing City', name: 'billing_city', type: 'string' as const, default: '' },
	{ displayName: 'Billing Region ISO', name: 'billing_region_iso', type: 'string' as const, default: '' },
	{ displayName: 'Billing Postal Code', name: 'billing_postal_code', type: 'string' as const, default: '' },
	{ displayName: 'Billing Country ISO', name: 'billing_country_iso', type: 'string' as const, default: '' },
	{ displayName: 'Shipping First Name', name: 'shipping_first_name', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Last Name', name: 'shipping_last_name', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Organization', name: 'shipping_organization', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Email', name: 'shipping_email', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Phone', name: 'shipping_phone', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Label', name: 'shipping_label', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Address', name: 'shipping_address', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Address 2', name: 'shipping_address2', type: 'string' as const, default: '' },
	{ displayName: 'Shipping City', name: 'shipping_city', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Region ISO', name: 'shipping_region_iso', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Postal Code', name: 'shipping_postal_code', type: 'string' as const, default: '' },
	{ displayName: 'Shipping Country ISO', name: 'shipping_country_iso', type: 'string' as const, default: '' },
];

export const contactFieldDefinitions: INodeProperties[] = [
	// ----------------------------------
	//         contact: create
	// ----------------------------------
	{
		displayName: 'Email',
		name: 'email',
		type: 'string',
		placeholder: 'name@email.com',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['contact'], operation: ['create'] } },
		description: 'Email address of the contact',
	},
	{
		displayName: 'Additional Fields',
		name: 'additionalFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['contact'], operation: ['create'] } },
		options: contactFields,
	},

	// ----------------------------------
	//         contact: get
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['contact'], operation: ['get'] } },
		description: 'ID of the contact to retrieve',
	},

	// ----------------------------------
	//         contact: getAll
	// ----------------------------------
	{
		displayName: 'Return All',
		name: 'returnAll',
		type: 'boolean',
		default: false,
		displayOptions: { show: { resource: ['contact'], operation: ['getAll'] } },
		description: 'Whether to return all results or only up to a given limit',
	},
	{
		displayName: 'Limit',
		name: 'limit',
		type: 'number',
		default: 50,
		typeOptions: { minValue: 1, maxValue: 100 },
		displayOptions: { show: { resource: ['contact'], operation: ['getAll'], returnAll: [false] } },
		description: 'Max number of results to return',
	},
	{
		displayName: 'Filters',
		name: 'filters',
		type: 'collection',
		placeholder: 'Add Filter',
		default: {},
		displayOptions: { show: { resource: ['contact'], operation: ['getAll'] } },
		options: [
			{ displayName: 'Email', name: 'email', type: 'string' as const, default: '', description: 'Filter by exact email' },
			{ displayName: 'Email Contains', name: 'email[cont]', type: 'string' as const, default: '', description: 'Filter by email containing value' },
			{ displayName: 'First Name', name: 'first_name', type: 'string' as const, default: '', description: 'Filter by exact first name' },
			{ displayName: 'First Name Contains', name: 'first_name[cont]', type: 'string' as const, default: '', description: 'Filter by first name containing value' },
			{ displayName: 'Last Name', name: 'last_name', type: 'string' as const, default: '', description: 'Filter by exact last name' },
			{ displayName: 'Last Name Contains', name: 'last_name[cont]', type: 'string' as const, default: '', description: 'Filter by last name containing value' },
			{ displayName: 'Organization', name: 'organization', type: 'string' as const, default: '', description: 'Filter by exact organization' },
			{ displayName: 'Organization Contains', name: 'organization[cont]', type: 'string' as const, default: '', description: 'Filter by organization containing value' },
			{ displayName: 'Sort By', name: 'sort_by', type: 'string' as const, default: '', description: 'Field to sort by' },
		],
	},

	// ----------------------------------
	//         contact: update
	// ----------------------------------
	{
		displayName: 'Contact ID',
		name: 'contactId',
		type: 'string',
		required: true,
		default: '',
		displayOptions: { show: { resource: ['contact'], operation: ['update'] } },
		description: 'ID of the contact to update',
	},
	{
		displayName: 'Update Fields',
		name: 'updateFields',
		type: 'collection',
		placeholder: 'Add Field',
		default: {},
		displayOptions: { show: { resource: ['contact'], operation: ['update'] } },
		options: contactFields,
	},
];
