import { Button, Card, Grid, Stack, Typography, Box, Modal, Paper, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';
import { schemaData } from '../../schemaData';
import { useDispatch, useSelector } from 'react-redux';
import { addDataAction, updateDataAction } from '../../redux/actions/servicesActions';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

const TestOrderDialog = ({ modalValue, editDataValue, url, rerender }) => {
    const cptList = useSelector((state) => state.servicesReducer.cptList);
    const dispatch = useDispatch()
    const [editValue, setEditValue] = editDataValue;
    const [openTestOrderModal, setOpenTestOrderModal] = modalValue;
    const [dataKeys, setDataKeys] = useState({})
    // const schema = yup.object().shape(schemaData[url]);
    const currentDateTime = new Date().toISOString();
    const [cptMenuOptions, setCptMenuOptions] = useState([]);
    const OrderDetailsArray = [
        "SampleIdDetails",
        "CPTID",
        "CPTPrice",
        "Desc",
        "OrderId",
        "Quantity",
        "Status",
        "TestID",
        "TestName"
    ]

    const hisAddSchema = {
        SampleIdDetails: yup.number().required('required'),
        CPTID: yup.number().required('required'),
        CPTPrice: yup.number().required('required'),
        Desc: yup.string().required('required'),
        OrderId: yup.string().required('required'),
        Quantity: yup.string().required('required'),
        Status: yup.string().required('required'),
        TestID: yup.string().required('required'),
        TestName: yup.string().required('required'),
        SampleIdMaster: yup.number().required('required'),
        MRN: yup.number().required('required'),
        UserID: yup.number().required('required'),
        BranchID: yup.number().required('required'),
        HospitalId: yup.string().required('required'),
        Desc: yup.string().required('required'),
        PatientName: yup.string().required('required'),
        // Physician: yup.string().required('required'),
        // Type: yup.string().required('required'),
    }

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(hisAddSchema),
    });
    // console.log("errors", errors);

    const upperCase = (data) => {
        if (data?.length) {
            return data.slice(0, 1).toUpperCase() + data.slice(1)
        }
    }

    useEffect(() => {
        setDataKeys({
            'OrderMaster': Object.keys(schemaData['TestOrder']['OrderMaster']),
            'OrderDetails': Object.keys(schemaData['TestOrder']['OrderDetails']),
        })
    }, [url])

    useEffect(() => {
        if (cptList?.length) {
            let data = []
            cptList && cptList?.map((item, i) => {
                data.push({ label: item?.Name, value: item.ID })
            })
            setCptMenuOptions(data)
        }
    }, [cptList])

    useEffect(() => {
        if (editValue?.Id) {
            Object.keys(editValue).forEach(key => {
                const name = editValue[key];
                // if (key == 'AnalyzerName') {
                //     const defaultValue = analyzerMenuOptions.find(option => option.label === name);
                //     if (defaultValue) setValue('AnalyzerID', defaultValue);
                //     setValue('AnalyzerName', defaultValue);
                //     setValue('AParamName', editValue['AparamName']);
                //     setValue('ARange', editValue['Arange']);
                //     setValue('AUnit', editValue['Aunit']);
                // }
                // else {
                setValue(key, editValue[key]);
                // }
            });
        }

    }, [editValue]);

    const Close = () => {
        setEditValue({})
        reset()
        setOpenTestOrderModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let data = watch()
        let OrderMaster = data;
    
        OrderMaster.CreatedOn = currentDateTime;
        OrderMaster.UpdatedOn = currentDateTime;
        OrderMaster.OrderDateTime = currentDateTime;
        OrderMaster.IsActive = true;
        OrderMaster.SampleId =  OrderMaster.SampleIdMaster;
        OrderMaster.Desc =  OrderMaster.DescMaster;
        OrderMaster.Status =  OrderMaster.StatusMaster;
        OrderMaster.MRN =  `${+OrderMaster.MRN}`;
        OrderMaster.Physician =  0;
        OrderMaster.UserID =  +OrderMaster.UserID;
        OrderMaster.HospitalId =  +OrderMaster.HospitalId;
        OrderMaster.BranchID =  +OrderMaster.BranchID;
        OrderMaster.SampleId =  +OrderMaster.SampleId;
        OrderMaster.OrderNumber =  +OrderMaster.OrderNumber;
        OrderMaster.PatientType =  true;
        OrderMaster.Type =  true;

        // OrderMaster.ID = 0;
        // if (!editValue?.Id) {
        //     delete data.HisName
        //     delete data.AnalyzerName
        // }
        
        let OrderDetails = [{
            "SampleID": +OrderMaster.SampleIdDetails,
            "CPTID": +OrderMaster.CPTID,
            "CPTPrice": +OrderMaster.CPTPrice,
            "Desc": OrderMaster.DescDetails,
            "OrderID": +OrderMaster.OrderId,
            "Quantity": +OrderMaster.Quantity,
            "Status": 0,
            "TestID": +OrderMaster.TestID,
            "TestName": OrderMaster.TestName,
    }];

    delete OrderMaster.SampleIdDetails;
    delete OrderMaster.SampleIdMaster;
    delete OrderMaster.DescMaster;
    delete OrderMaster.DescDetails;
    delete OrderMaster.StatusMaster;
    delete OrderMaster.StatusDetails;
    delete OrderMaster.CPTID;
    delete OrderMaster.CPTPrice;
    delete OrderMaster.OrderId;
    delete OrderMaster.Quantity;
    delete OrderMaster.Status;
    delete OrderMaster.TestID;
    delete OrderMaster.TestName;
    
    let patterData = {...OrderMaster,OrderDetails}
        // if (editValue?.Id) {
        //     data.Id = editValue.Id
        //     delete data.HisCode
        //     if (data.AnalyzerName) {
        //         delete data.AnalyzerName;
        //         if (data.AnalyzerID?.label) {
        //             data.AnalyzerID = data.AnalyzerID.value
        //         }
        //     }
        //     if (data.HISID) {
        //         delete data.HisName;
        //         if (data.HISID?.label) {
        //             data.HISID = data.HISID.value
        //         }
        //     }
        //     dispatch(updateDataAction(url, editValue.Id, data, rerender))
        //     Close()
        // } else {
            dispatch(addDataAction(url, patterData, rerender))
            Close()
        // }
    }

    return (
        <>
            <Modal
                open={openTestOrderModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '95%', height: '90%', border: 'none !important' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '20px', minWidth: '100%', borderRadius: '20px', overflowY: 'scroll', }}>
                        {/* <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', pb: 0, fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography> */}
                        <Typography sx={{ fontSize: '24px', padding: '10px', ml: 4, fontWeight: '600' }}> Test Order Mapping</Typography>
                        <hr />
                        <form onSubmit={onSubmit}>
                            <Stack spacing={2} gap={5} sx={{ mt: 3, mx: 3, display: 'flex', flexDirection: ['column', 'row', 'row'] }}>
                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 2, }}>
                                    <Box sx={{  backgroundColor: 'lightgray',margin: '0 auto', width: '100%', borderRadius: '20px', p: 0, boxShadow: '3px 3px 10px' }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1, mt: 1 }}>Order Details</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.OrderDetails?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        {item === "CPTID" ? (
                                                            <SelectFieldComponent
                                                                name={'CPTID'}
                                                                label={'CPT'}
                                                                menuOptions={cptMenuOptions}
                                                                register={register}
                                                                watch={watch}
                                                                setValue={setValue}
                                                            />
                                                        ) : (
                                                            <>
                                                                {item === 'Desc' || item === 'description' ? (
                                                                    <TextFieldComponent
                                                                        // fullWidth
                                                                        multiline
                                                                        rows={3}
                                                                        name={item}
                                                                        label={upperCase(item)}
                                                                        register={register}
                                                                    />)
                                                                    :
                                                                    (
                                                                        <TextFieldComponent
                                                                            name={item}
                                                                            label={upperCase(
                                                                                item == 'HUnit' ? 'Unit Of Measure' :
                                                                                    item == 'HParamName' ? 'Test Name' :
                                                                                        item == 'HRange' ? 'Range' :
                                                                                            item == 'HISCode' ? 'Test ID' :
                                                                                                item)}
                                                                            register={register}
                                                                        />
                                                                    )}
                                                            </>
                                                        )}
                                                    </Stack>
                                                ))}
                                            </Paper>
                                        </Grid>
                                    </Box>
                                </Grid>

                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 2, marginTop: '0px !important' }}>
                                    <Box sx={{ backgroundColor: 'lightgray', margin: '0 auto', width: '100%', borderRadius: '20px', p: 0, boxShadow: '3px 3px 10px' }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 ,mt:1}}>Order Master</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.OrderMaster?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        <>
                                                            {item === 'Desc' || item === 'description' ? (
                                                                <TextFieldComponent
                                                                    // fullWidth
                                                                    multiline
                                                                    rows={3}
                                                                    name={item}
                                                                    label={upperCase(item)}
                                                                    register={register}
                                                                />)
                                                                :
                                                                (
                                                                    <TextFieldComponent
                                                                        name={item}
                                                                        label={upperCase(
                                                                            item == 'AUnit' ? 'Unit Of Measure' :
                                                                                item == 'AParamName' ? 'Parameter Name' :
                                                                                    item == 'ARange' ? 'Range' :
                                                                                        item == 'AnalyzerCode' ? 'Host Code' :
                                                                                            item)}
                                                                        register={register}
                                                                    />
                                                                )}
                                                        </>
                                                    </Stack>
                                                ))}
                                            </Paper>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Stack>

                            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 2 }}>
                                <Grid item xs={12} md={9}>
                                    <Stack direction={'row'} gap={3} sx={{ width: '100%' }}>
                                        <Button sx={{ width: '200px' }} fullWidth variant="contained" type="submit">
                                            {editValue.id ? 'Update' : 'Add'}
                                        </Button>
                                        <Button sx={{ width: '200px' }} fullWidth variant="contained" color="error" onClick={Close}>
                                            Cancel
                                        </Button>
                                    </Stack>
                                </Grid>
                            </Box>
                        </form>

                    </Card>
                </Box>
            </Modal>
        </>

    )
}

export default TestOrderDialog