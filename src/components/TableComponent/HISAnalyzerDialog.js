import { Button, Card, Grid, Stack, Typography, Box, Modal, Paper, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';
import { schemaData } from '../../schemaData';
import { useDispatch } from 'react-redux';
import { addDataAction, updateDataAction } from '../../redux/actions/servicesActions';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';

const HISAnalyzerDialog = ({ modalValue, editDataValue, url, analyzerMenuOptions, hisMenuOptions, rerender,selectedAnalyzer,selectedHis }) => {

    const dispatch = useDispatch();
    const [editValue, setEditValue] = editDataValue;
    const [openHisModal, setOpenHisModal] = modalValue;
    const [dataKeys, setDataKeys] = useState({});
    const currentDateTime = new Date().toISOString();
    const [typeMenuOptions, setTypeMenuOptions] = useState([
        { label: 'CHAR', value: 'Char' },
        { label: 'NUM', value: 'Num' },
    ]);

    const hisAddSchema = {
        HISID: yup.number().required('HISID is required'),
        HISCode: yup.string().required('TestID is required'),
        AnalyzerID: yup.number().required('Host Code is required'),
        AnalyzerCode: yup.string().required('AnalyzerCode is required'),
        HParamName: yup.string().required('Parameter Name is required'),
        AParamName: yup.string().required('Parameter Name is required'),
        HUnit: yup.string().required('Unit is required'),
        AUnt: yup.string().required('Unit is required'),
        HRange: yup.string().required('Range is required'),
        ARange: yup.string().required('Range is required'),
    }

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(yup.object().shape(hisAddSchema) ),
    });

    const upperCase = (data) => {
        if (data?.length) {
            return data.slice(0, 1).toUpperCase() + data.slice(1)
        }
    }

    useEffect(() => {
        setDataKeys({
            'HIS': Object.keys(schemaData['HISAnalyzer']['HIS']),
            'Analyzer': Object.keys(schemaData['HISAnalyzer']['Analyzer']),
        } )
    }, [url])

    useEffect(()=>{
        const hisValue = hisMenuOptions.find(option => option.label === selectedHis);
        setValue('HISID', hisValue?.value);
        const anlyzerValue = analyzerMenuOptions.find(option => option.label === selectedAnalyzer);
        setValue('AnalyzerID', anlyzerValue?.value);
    },[selectedAnalyzer,selectedHis,editValue])

    useEffect(() => {
        if (editValue?.Id) {
            Object.keys(editValue).forEach(key => {
                const name = editValue[key];
                if (key == 'HisCode') {
                    const defaultValue = hisMenuOptions.find(option => option.label === name);
                    // if (defaultValue) setValue('HISID', defaultValue);
                    setValue('HISCode', editValue['HisCode']);
                    setValue('HisName', defaultValue);
                    setValue('HParamName', editValue['HparamName']);
                    setValue('HRange', editValue['Hrange']);
                    setValue('HUnit', editValue['Hunit']);
                }
                if (key == 'AnalyzerName') {
                    const defaultValue = analyzerMenuOptions.find(option => option.label === name);
                    // if (defaultValue) setValue('AnalyzerID', defaultValue);
                    setValue('AnalyzerName', defaultValue);
                    setValue('AParamName', editValue['AparamName']);
                    setValue('ARange', editValue['Arange']);
                    setValue('AUnt', editValue['Aunit']);
                }
                else {
                    setValue(key, editValue[key]);
                }
            });
        }
    }, [editValue]);

    const Close = () => {
        setEditValue({})
        reset()
        setOpenHisModal(false)
    }

    const onSubmit = (e) => {
        // e.preventDefault()
        let data = watch()
        hisMenuOptions?.map((item,i)=>{
            if(item.label == selectedHis){
                data.HISID = item.value
            }
        })
        analyzerMenuOptions?.map((item,i)=>{
            if(item.label == selectedAnalyzer){
                data.AnalyzerID = item.value
            }
        })
        let addData = data;
        addData.CreatedBy = 1;
        addData.UpdatedBy = 1;
        addData.CreatedOn = currentDateTime;
        addData.UpdatedOn = currentDateTime;
        addData.IsActive = true
        // if(!editValue?.Id){
        //     delete data.HisName
        //     delete data.AnalyzerName
        // }
        if (editValue?.Id) {
            data.Id = editValue.Id
            delete data.HisCode
            delete data.AparamName
            delete data.Arange
            delete data.Aunit
            delete data.HparamName
            delete data.Hrange
            delete data.Hunit
            delete data.AnalyzerName;
            delete data.HisName;
            // if (data.AnalyzerName) {
            //     if (data.AnalyzerID?.label) {
            //         data.AnalyzerID = data.AnalyzerID.value
            //     }
            // }
            // if (data.HISID) {
            //     if (data.HISID?.label) {
            //         data.HISID = data.HISID.value
            //     }
            // }
            dispatch(updateDataAction(url, editValue.Id, data, rerender))
            Close()
            reset()
        } else {
            dispatch(addDataAction(url, addData, rerender))
            Close()
            reset()
        }
    }

    return (
        <>
            <Modal
                open={openHisModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '80%', height: '90%', border: 'none !important' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '20px', minWidth: '90%', borderRadius: '20px', overflowY: 'scroll', }}>
                        {/* <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', pb: 0, fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography> */}
                        <Typography sx={{ fontSize: '24px', padding: '10px', ml: 4, fontWeight: '600' }}> HIS-Analyzer Mapping</Typography>
                        <hr />
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <Stack spacing={2} gap={2} sx={{ mt: 3, mx: 3, display: 'flex', flexDirection: ['column', 'row', 'row'] }}>
                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 1, }}>
                                    <Box sx={{ backgroundColor: '#f2c6ff', margin: '0 auto', width: '100%', borderRadius: '20px', p: 2,boxShadow:'3px 3px 10px'  }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>{selectedHis || editValue?.HisName}</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.HIS?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        {item === "HISID" ? 
                                                        null
                                                        // (
                                                        //     <SelectFieldComponent
                                                        //         name={'HISID'}
                                                        //         label={'HIS'}
                                                        //         menuOptions={hisMenuOptions}
                                                        //         register={register}
                                                        //         watch={watch}
                                                        //         setValue={setValue}
                                                        //     />
                                                        // ) 
                                                        : (
                                                            <>
                                                                {item === 'Desc' || item === 'description' ? (
                                                                    <TextFieldComponent
                                                                        // fullWidth
                                                                        multiline
                                                                        rows={3}
                                                                        name={item}
                                                                        label={upperCase(item)}
                                                                        register={register}
                                                                        errors={errors}
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
                                                                            errors={errors}
                                                                            disable= {editValue.Id && item == "HISCode"}
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
                                <Grid container lg={1} md={1} sm={1} sx={{ mt: 4 }} >
                                    <Paper sx={{ p: 2 }}>
                                        {[1, 2, 3, 4, 5]?.map((item, i) => (
                                            <Stack spacing={2} sx={{ mt: 4.5 }} direction={'coloumn'} key={item + i}>
                                                <IconButton sx={{
                                                    backgroundColor: '#1976d2',
                                                    '&:hover': {
                                                        backgroundColor: '#1565c0',
                                                    }
                                                }} >
                                                    <SettingsEthernetIcon sx={{ color: 'white' }} />
                                                </IconButton>
                                            </Stack>
                                        ))}
                                    </Paper>
                                </Grid>
                                <Grid container spacing={2} lg={6} md={6} sm={12} sx={{ mx: 1, marginTop: '0px !important' }}>
                                    <Box sx={{ backgroundColor: '#94dde8', margin: '0 auto', width: '100%', borderRadius: '20px', p: 2 ,boxShadow:'3px 3px 10px' }}>
                                        <Grid item xs={12} sx={{ px: 3, pb: 2 }}>
                                            <Typography variant="h5" sx={{ textAlign: 'center', mb: 1 }}>{selectedAnalyzer || editValue?.AnalyzerName}</Typography>
                                            <Paper sx={{ p: 2 }}>
                                                {dataKeys.Analyzer?.map((item, i) => (
                                                    <Stack spacing={2} sx={{ mt: i == 0 ? 0 : 2.5 }} key={item + i}>
                                                        {item === "AnalyzerID" ? 
                                                        null
                                                        //  (
                                                        //     <SelectFieldComponent
                                                        //         name={'AnalyzerName'}
                                                        //         label={'Analyzer'}
                                                        //         menuOptions={analyzerMenuOptions}
                                                        //         register={register}
                                                        //         watch={watch}
                                                        //         setValue={setValue}
                                                        //     />
                                                        // )
                                                         : (
                                                            <>
                                                                {item === 'Desc' || item === 'description' ? (
                                                                    <TextFieldComponent
                                                                        // fullWidth
                                                                        multiline
                                                                        rows={3}
                                                                        name={item}
                                                                        label={upperCase(item)}
                                                                        register={register}
                                                                        errors={errors}
                                                                    />)
                                                                    :
                                                                    (
                                                                        <TextFieldComponent
                                                                            name={item}
                                                                            label={upperCase(
                                                                                    item == 'AUnt' ? 'Unit Of Measure' :
                                                                                            item == 'AParamName' ? 'Parameter Name' :
                                                                                                    item == 'ARange' ? 'Range' :
                                                                                                    item == 'AnalyzerCode' ? 'Host Code' :
                                                                                                        item)}
                                                                            register={register}
                                                                            errors={errors}
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

export default HISAnalyzerDialog