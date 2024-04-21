import * as yup from 'yup';
export const schemaData = {
    'Analyzer' : {
        Name: yup.string().required('Name is required'),
        Vendor: yup.string().required('Vendor is required'),
        Desc: yup.string().required('Description is required'),
    },
    'AnalyzerParameter' : {
        AnalyzerID: yup.number().required('required'),
        LISCodeID: yup.number().required('required'),
        LASCodeID: yup.number().required('required'),
        // isActive: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'Cpt' : {
        Name: yup.string().required('required'),
        Description: yup.string().required('required'),
        // isActive: yup.boolean().required('required'),
     
    },
    'LisCode' : {
        Name: yup.string().required('required'),
        Type: yup.boolean().required('required'),
        // isActive: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'TestParameter' : {
        CPTID: yup.number().required('required'),
        LISCodeID: yup.number().required('required'),
        Unit: yup.string().required('required'),
        Range: yup.string().required('required'),
        Desc: yup.string().required('required'),
        // isActive: yup.boolean().required('required'),
     
    },
    'GenLookup' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
     
    },
    // ==================
    'InvoiceDetail' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
     
    },
    'InvoiceMaster' : {
        keyName: yup.string().required('required'),
        value: yup.string().required('required'),
        type: yup.boolean().required('required'),
     
    },
    'OrderDetail' : {
        OrderID: yup.string().required('required'),
        CPTID: yup.string().required('required'),
        CPTPrice: yup.string().required('required'),
        Quantity: yup.string().required('required'),
        // Quantity: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'OrderMaster' : {
        MRN: yup.string().required('MRN is required'),
        Physician: yup.string().required('Physician is required'),
        UserID: yup.string().required('UserID is required'),
        Desc: yup.string().required('Description is required'),
     
    },
    'PathologyPendingQueue' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'PathologyResultDetail' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'PathologyResultMaster' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'TestOrder/getall' : {
        name: yup.string().required('required'),
        // type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
    },
    'RoleModule' : {
        roleId: yup.string().required('required'),
        moduleId: yup.string().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'Module' : {
        roleId: yup.string().required('required'),
        moduleId: yup.string().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'Role' : {
        name: yup.string().required('required'),
        type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
     
    },
    'TestResult' : {
        CategoryName: yup.string().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'TestCategory' : {
        CategoryName: yup.string().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'TestSample' : {
        CPTID: yup.string().required('required'),
        SampleName: yup.string().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'TestUnit' : {
        Unit: yup.string().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'User' : {
        Name: yup.string().required('required'),
        Mobile: yup.string().required('required'),
        Email: yup.string().required('required'),
        Username: yup.string().required('required'),
        Password: yup.string().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'His' : {
        Name: yup.string().required('required'),
        // type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'TestOrder' : {
        Name: yup.string().required('required'),
        // type: yup.boolean().required('required'),
        Desc: yup.string().required('required'),
      
    },
    'HISAnalyzer' : {
        'Analyzer' : {
            AnalyzerID: yup.number().required('required'),
            AnalyzerCode: yup.string().required('required'),
            AParamName: yup.string().required('required'),
            AUnt: yup.string().required('required'),
            ARange: yup.string().required('required'),
        },
        'HIS' : {
            HISID: yup.number().required('required'),
            HISCode: yup.string().required('required'),
            HParamName: yup.string().required('required'),
            HUnit: yup.string().required('required'),
            HRange: yup.string().required('required'),
        }
    },
    'hisAddSchema' : {
        HISID: yup.number().required('required'),
        HISCode: yup.string().required('required'),
        AnalyzerID: yup.number().required('required'),
        AnalyzerCode: yup.string().required('required'),
        HParamName: yup.string().required('required'),
        AParamName: yup.string().required('required'),
        HUnit: yup.string().required('required'),
        AUnt: yup.string().required('required'),
        HRange: yup.string().required('required'),
        ARange: yup.string().required('required'),
    },
    'TestOrder' : {
            // CPTID: yup.string().required('required'),
            // CPTPrice: yup.string().required('required'),
            // Quantity: yup.string().required('required'),
            // MRN: yup.number().required('required'),
            // UserID: yup.string().required('required'),
            // TestName: yup.string().required('required'),
            'OrderDetails' : {
                SampleIdDetails: yup.number().required('required'),
                CPTID: yup.number().required('required'),
                CPTPrice: yup.number().required('required'),
                DescDetails: yup.string().required('required'),
                OrderId: yup.string().required('required'),
                Quantity: yup.string().required('required'),
                StatusDetails: yup.string().required('required'),
                TestID: yup.string().required('required'),
                TestName: yup.string().required('required'),
            },
            'OrderMaster' : {
                SampleIdMaster: yup.number().required('required'),
                MRN: yup.number().required('required'),
                UserID: yup.number().required('required'),
                DescMaster: yup.string().required('required'),
                BranchID: yup.number().required('required'),
                HospitalId: yup.string().required('required'),
                PatientName: yup.string().required('required'),
                // PatientType: yup.string().required('required'),
                OrderNumber: yup.string().required('required'),
                Gender: yup.string().required('required'),
                // StatusMaster: yup.string().required('required'),
                // Physician: yup.string().required('required'),
                // Type: yup.string().required('required'),
            }
    },
    'Hospital' :{
        Name: yup.string().required('Name is required'),
        Phone: yup.string().required('Phone number is required'),
        Desc: yup.string().required('Description is required'),
    }
}