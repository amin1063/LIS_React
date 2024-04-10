// export const baseURL = 'http://localhost:50486/api/'
// export const baseURL = 'http://13.233.159.252/api/'
export const baseURL = 'https://hitechways.info/api/'

export const navConfigPublic = [
  { title: 'Home', path: '/' },
]
export const navConfig = [
  { title: 'Home', path: '/' },
  {
    title: 'Services',
    children: [
      { title: 'Analyzer', path: '/analyzer' },
      { title: 'Analyzer Parameter', path: '/analyzerParameter' },
      { title: 'CPT', path: '/CPT' },
      { title: 'LIS Code', path: '/LISCode' },
      { title: 'HIS', path: '/His' },
      { title: 'HIS Analyzer', path: '/HISAnalyzer' },
    ]
  },
  {
    title: 'Tests',
    children: [
      { title: 'Test Categories', path: '/TestCategories' },
      { title: 'Test Parameters', path: '/TestParameters' },
      { title: 'Test Samples', path: '/TestSamples' },
      { title: 'Test Units', path: '/TestUnits' },
  { title: 'Test Order', path: '/TestOrder' },

    ]
  },
  {
    title: 'Pathology',
    children: [
      // { title: 'Pathology Pending Queues', path: '/PathologyPendingQueues' },
    // { title: 'Pathology Result Details', path: '/PathologyResultDetails' },
    { title: 'Pathology Result Masters', path: '/PathologyResultMasters' },
    { title: 'HearBeat Results', path: '/HeartBeatResults' },
    { title: 'Analyzers-Machine', path: '/Analyzer-Machine' },
    ]
  },
  {
    title: 'Invoice/Orders',
    children: [
      { title: 'Invoice Details', path: '/InvoiceDetails' },
  { title: 'Invoice Masters', path: '/InvoiceMasters' },
  // { title: 'Order Details', path: '/OrderDetails' },
  { title: 'Order Masters', path: '/OrderMasters' },
    ]
  },
  {
    title: 'Others',
    children: [
      { title: 'Gen Lookups', path: '/GenLookups' },
      { title: 'Modules', path: '/Modules' },
      { title: 'Role Modules', path: '/RoleModules' },
      { title: 'Roles', path: '/Roles' },
      { title: 'Users', path: '/Users' },
    ]
  },
];

//  export const childNav = [
//     { title: 'Analyzer', path: '/analyzer' },
//     { title: 'Analyzer Parameter', path: '/analyzerParameter' },
//     { title: 'CPT', path: '/CPT' },

//     { title: 'LIS Code', path: '/LISCode' },

//     { title: 'Gen Lookups', path: '/GenLookups' },
//     { title: 'Invoice Details', path: '/InvoiceDetails' },
//     { title: 'Invoice Masters', path: '/InvoiceMasters' },
//     { title: 'Modules', path: '/Modules' },
//     { title: 'Role Modules', path: '/RoleModules' },
//     { title: 'Roles', path: '/Roles' },
//     { title: 'Order Details', path: '/OrderDetails' },
//     { title: 'Order Masters', path: '/OrderMasters' },
//     { title: 'Pathology Pending Queues', path: '/PathologyPendingQueues' },
//     { title: 'Pathology Result Details', path: '/PathologyResultDetails' },
//     { title: 'Pathology Result Masters', path: '/PathologyResultMasters' },
//     { title: 'Test Categories', path: '/TestCategories' },
//     { title: 'Test Parameters', path: '/TestParameters' },
//     { title: 'Test Samples', path: '/TestSamples' },
//     { title: 'Test Units', path: '/TestUnits' },
//     { title: 'Users', path: '/Users' },
// ]

export const analyzerTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Analyzer Name' },
  { id: 'Vendor', label: 'Vendor' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  { id: 'CreatedOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const analyzerParameterTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'AnalyzerName', label: 'Analyzer Name' },
  { id: 'LiscodeName', label: 'LISCode Name' },
  { id: 'LASCodeID', label: 'LASCodeID' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const cptsTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'Description', label: 'Description' },
  { id: 'CategoryId', label: 'Category Id' },
  { id: 'UnitId', label: 'Unit Id' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const liscodesTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testCategoriesTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'CategoryName', label: 'Category Name' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testParameterTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'CptName', label: 'CPT Name' },
  { id: 'LiscodeName', label: 'Liscode Name' },
  { id: 'Unit', label: 'Unit' },
  { id: 'Range', label: 'Range' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testSampleTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'SampleName', label: 'Sample Name' },
  { id: 'CPTID', label: 'CPT Name' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const testUnitTableHeadings = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Unit', label: 'Unit' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyPendingQueuesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'CPTID', label: 'CPT Name' },
  { id: 'OrderDetailID', label: 'Order Deatil ID' },
  { id: 'Status', label: 'Status' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyResultDetailsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'LiscodeName', label: 'LSI Name' },
  { id: 'OrderDetailId', label: 'Order Deatil ID' },
  { id: 'PathologyResultMasterId', label: 'PathologyResultMaster Id' },
  { id: 'Result', label: 'Result' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const pathologyResultMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'OrderDetailId', label: 'Order Deatil ID' },
  { id: 'CptName', label: 'CPT Name' },
  { id: 'SampleId', label: 'Sample Id' },
  { id: 'MRN', label: 'MRN' },
  { id: 'Patient', label: 'Patient Name' },
  { id: 'Received', label: 'Received' },
  { id: 'Collected', label: 'Collected' },
  // { id: 'labId', label: 'Lab Id' },
  { id: 'Status', label: 'Status' },
  // { id: 'Desc', label: 'Description' },
  // { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const invoiceDetailsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'InvoiceId', label: 'Invoice Id' },
  { id: 'OrderId', label: 'Order Id' },
  { id: 'Cptid', label: 'CPT Id' },
  { id: 'UnitCost', label: 'Unit Cost' },
  { id: 'Quantity', label: 'Quantity' },
  { id: 'ItemTotal', label: 'Item Total' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const invoiceMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'OrderId', label: 'Order Id' },
  { id: 'PatientId', label: 'Patient Id' },
  { id: 'InvoiceTotal', label: 'Invoice Total' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const orderDetailsTableHeadings  = [
  { id: 'OrderID', label: 'Order ID' },
  { id: 'CPTNAME', label: 'CPT Name' },
  { id: 'CPTPrice', label: 'CPT Price' },
  { id: 'Quantity', label: 'Quantity' },
  { id: 'TestID', label: 'Test ID' },
  { id: 'TestName', label: 'Test Name' },
  { id: 'Status', label: 'Status' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  // { id: 'actions', label: 'Actions' },
];

export const orderMastersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'UserID', label: 'User Id' },
  { id: 'Physician', label: 'Physician' },
  { id: 'SampleID', label: 'SampleID' },
  { id: 'MRN', label: 'MRN' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const genLookupsTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'KeyName', label: 'Key Name' },
  { id: 'Value', label: 'Value' },
  { id: 'Type', label: 'Type' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const modulesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const roleModulesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'RoleId', label: 'Role Id' },
  { id: 'ModuleId', label: 'Module Id' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const rolesTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'type', label: 'Type' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const usersTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'Mobile', label: 'Mobile' },
  { id: 'Email', label: 'Email' },
  { id: 'Username', label: 'Username' },
  { id: 'Password', label: 'Password' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const HisTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'Name', label: 'Name' },
  { id: 'Desc', label: 'Description' },
  { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const HisAnalyzerTableHeadings  = [
  { id: 'id', label: 'Sr.No' },
  { id: 'HisName', label: 'HIS' },
  { id: 'HisCode', label: 'Test ID' },
  { id: 'HparamName', label: 'Test Name' },
  { id: 'Hunit', label: 'Test Unit' },
  { id: 'Hrange', label: 'Test Range' },
  { id: 'AnalyzerName', label: 'Analyzer' },
  { id: 'AnalyzerCode', label: 'Host Code' },
  { id: 'AparamName', label: 'Parameter Name' },
  { id: 'Aunit', label: 'Analyzer Unit' },
  { id: 'Arange', label: 'Analyzer Range' },
  // { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  { id: 'actions', label: 'Actions' },
];

export const SampleDetailsTableHeadings  = [
  // { id: 'id', label: 'Sr.No' },
  { id: 'LisId', label: 'Test ID' },
  { id: 'LISCodeName', label: 'Test Name' },
  { id: 'HostCode', label: 'Host Code' },
  { id: 'Result', label: 'Result' },
  { id: 'History', label: 'History' },
  { id: 'Unit', label: 'Unit' },
  { id: 'Range', label: 'Range' },
  { id: 'AbnormalFlag', label: 'Abnormal' },
  // { id: 'pathologyResultMasterId', label: 'Master ID' },
  // { id: 'IsActive', label: 'IsActive' },
  // { id: 'createdOn', label: 'CreatedOn' },
  // { id: 'updatedOn', label: 'UpdatedOn' },
  // { id: 'createdBy', label: 'CreatedBy' },
  // { id: 'updatedBy', label: 'UpdatedBy' },
  // { id: 'actions', label: 'Actions' },
];

export const HeartBeatHeadings = [
  { id: 'MachineName', label: 'MachineName' },
  { id: 'Heartbeat', label: 'Heartbeat' },
  { id: 'IsActive', label: 'IsActive' },
]
export const TestOrderHeadings = [
  { id: 'OrderID', label: 'OrderID' },
  { id: 'MRN', label: 'MRN' },
  { id: 'SampleID', label: 'Sample ID' },
  { id: 'Physician', label: 'Physician' },
  { id: 'UserID', label: 'UserID' },
  { id: 'CPTID', label: 'CPT Name' },
  { id: 'CPTPrice', label: 'CPTPrice' },
  { id: 'Quantity', label: 'Quantity' },
  { id: 'BranchID', label: 'BranchID' },
  { id: 'OrderNumber', label: 'OrderNumber' },
  // { id: 'SampleID', label: 'SampleID' },
  { id: 'IsActive', label: 'IsActive' },
  { id: 'actions', label: 'Actions' },
]



