import { Button, Card, Grid, Stack, TextField, Typography, Box, Modal, Autocomplete } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextFieldComponent from '../TextFieldComponent'
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import '../../App.css'
import SelectFieldComponent from '../SelectFieldComponent';
import { schemaData } from '../../schemaData';
import { useDispatch } from 'react-redux';
import { addDataAction, getAnalyzers, getCpt, getLisCodes, updateDataAction } from '../../redux/actions/servicesActions';

const AddEditPopup = ({ modalValue, editDataValue,url,fetchData,LisCodesList,analyzersList,cptList,rerender }) => {

    const dispatch = useDispatch()
    const [editValue, setEditValue] = editDataValue;
    const [openModal, setOpenModal] = modalValue;
    const [dataKeys,setDataKeys] = useState([])
    const schema = yup.object().shape(schemaData[url]);
    const currentDateTime = new Date().toISOString();
    const [analyzerMenuOptions,setAnalyzerMenuOptions] = useState([]);
    const [liscodeMenuOptions,setLiscodeMenuOptions] = useState([]);
    const [cptMenuOptions,setCptMenuOptions] = useState([]);
    const [typeMenuOptions,setTypeMenuOptions] = useState([
        {label:'CHAR',value:'Char'},
        {label:'NUM',value:'Num'},
    ])

    const {
        register,
        handleSubmit,
        reset,
        watch,
        setValue,
        getValues,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    // console.log("errors", errors);

    const upperCase =(data)=>{
        if(data?.length){
            return data.slice(0,1).toUpperCase() + data.slice(1)
        }
    }
    
    useEffect(()=>{
        if(editValue){
            if(url !== 'HisAnalyzer'){
                setDataKeys(Object.keys(schemaData[url]))
            }
        }
    },[url])

    useEffect(()=>{
        if(analyzersList?.length){
            let data = []
            analyzersList && analyzersList?.map((item,i)=>{
                data.push({label: item?.Name, value: item.ID})
            })  
            setAnalyzerMenuOptions(data)
        }
        if(LisCodesList?.length){
            let data = []
            LisCodesList.map((item,i)=>{
                data.push({label: item?.Name, value: item.ID})
            })  
            setLiscodeMenuOptions(data)
        }
        if(cptList?.length){
            let data = []
            cptList.map((item,i)=>{
                data.push({label: item?.Name, value: item.ID})
            })  
            setCptMenuOptions(data)
        }
    },[analyzersList,LisCodesList,cptList])

    useEffect(() => {
        if (editValue?.ID || editValue?.Id) {
            Object.keys(editValue).forEach(key => {
                const name = editValue[key];
                if(key == 'CptName'){
                    const defaultValue = cptMenuOptions.find(option => option.label === name);
                    if (defaultValue) setValue('CPTID', defaultValue);
                }
                if(key == 'LiscodeName'){
                    const defaultValue = liscodeMenuOptions.find(option => option.label === name);
                    if (defaultValue)  setValue('LISCodeID', defaultValue);
                }
                if(key == 'AnalyzerName'){
                    const defaultValue = analyzerMenuOptions.find(option => option.label === name);
                    if (defaultValue) setValue('AnalyzerID', defaultValue);
                }
                else{
                    setValue(key, editValue[key]); 
                }
            });
        }
    }, [editValue]);

    const Close =()=>{
        setEditValue({})
        reset()
        setOpenModal(false)
    }

    const onSubmit = (e) => {
        e.preventDefault()
        let testOrderData = {}
        let data = watch()
        let addData = data;
        addData.CreatedBy = 1;
        addData.UpdatedBy = 1;
        addData.CreatedOn = currentDateTime;
        addData.UpdatedOn = currentDateTime;
        addData.IsActive = true
        addData.ID = 0;
        if(url == 'AnalyzerParameter'){
            delete addData.Id
        }
        if(url == 'TestOrder'){
            testOrderData = {
                "MRN": data.MRN,
                "Physician": 0,
                "UserID": data.UserID,
                "Desc": "string",
                "IsActive": true,
                "CreatedOn": "2024-03-30T10:58:07.896Z",
                "UpdatedOn": "2024-03-30T10:58:07.896Z",
                "HospitalId": 0,
                "BranchID": 0,
                "SampleId": 0,
                "OrderDateTime": "2024-03-30T10:58:07.896Z",
                "Status": "string",
                "Type": true,
                "PatientType": true,
                "OrderNumber": 0,
                "OrderDetails": [
                  {
                    "CPTID": data.CPTID,
                    "CPTPrice": data.CPTPrice,
                    "Quantity": data.Quantity,
                    "Desc": "string",
                    "SampleID": 0,
                    "TestID": 0,
                    "CreatedBy": "2024-03-30T10:58:07.897Z",
                    "TestName": data.TestName,
                    "UpdatedBy": "2024-03-30T10:58:07.897Z",
                    "Status": 0,
                    "IsActive": true,
                    "CreatedOn": "2024-03-30T10:58:07.897Z",
                    "UpdaetedOn": "2024-03-30T10:58:07.897Z"
                  }
                ]
              }
        }
        
        if(url === 'Cpt'){
            addData.unitId = 0;
            addData.categoryId = 0;
        }
        if(editValue?.ID || editValue?.Id){
            data.ID = editValue.ID || editValue?.Id
            if(data.LISCodeID){
                delete data.LiscodeName;
                if(data.LISCodeID?.label){
                    data.LISCodeID = data.LISCodeID.value
                }
            }
            if(data.CPTID){
                delete data.CptName;
                if(data.CPTID?.label){
                    data.CPTID = data.CPTID.value
                }
            }
            if(data.AnalyzerID){
                delete data.AnalyzerName;
                if(data.AnalyzerID?.label){
                    data.AnalyzerID = data.AnalyzerID.value
                }
            }
            dispatch(updateDataAction(url,data.ID,data,rerender))
            Close()
        }else{
            if(url == 'TestOrder'){
                dispatch(addDataAction(url,testOrderData,rerender))
            }else{
                dispatch(addDataAction(url,addData,rerender))
            }
            Close()
        }
    }

    return (
        <> 
            <Modal
                open={openModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <Card sx={{ backgroundColor: '#ffff', pb: '10px', maxWidth:'80%', borderRadius: '20px' }}>
                        <Typography sx={{ fontSize: '24px', textAlign: 'center', padding: '10px', fontWeight: '600' }}> {editValue.id ? 'Edit Data' : 'Add Data'}</Typography>
                        <form onSubmit={onSubmit} >
                            <Grid container spacing={2} sx={{mx:3}}>
                                {dataKeys?.map((item,i)=>(
                                    <Grid key={item+i} item xs={10.5} sm={5.5} md={3.7} lg={3.7}>
                                        {item === "AnalyzerID" || item === "LISCodeID" || item === "CPTID"|| item === "Type"? 
                                        <SelectFieldComponent
                                            name={item}
                                            label={ item === "AnalyzerID" ? 'Analyzers' : item === "LISCodeID" ? 'LIS ID' : item === "CPTID" ? 'CPT ID': 'Type' }
                                            menuOptions={item === "AnalyzerID" ? analyzerMenuOptions :
                                                         item === "LISCodeID" ? liscodeMenuOptions :
                                                         item === "CPTID" ? cptMenuOptions :
                                                         typeMenuOptions
                                                        }
                                            register={register}
                                            watch={watch}
                                            setValue={setValue}
                                        /> 
                                    
                                        : item === 'desc' || item ===  'description' ? 
                                        <TextFieldComponent
                                        // fullWidth
                                        multiline
                                        rows={3}
                                            name={item}
                                            label={upperCase(item)}
                                            register={register}
                                        />
                                        :
                                        <TextFieldComponent
                                            name={item}
                                            label={upperCase(item)}
                                            register={register}
                                        />
                                    }
                                 </Grid> 
                                ))}
                                <Box sx={{ width: '100%', m: 2, }}>
                                    <Grid item xs={12}
                                        md={9}>
                                        <Stack direction={'row'} gap={3} sx={{ width: '50%' }}>
                                            <Button fullWidth variant="contained" type='submit'> {editValue.ID || editValue.Id ? 'Update':'Add'}</Button>
                                            <Button fullWidth variant="contained" color='error' onClick={Close} > Cancel</Button>
                                        </Stack>
                                    </Grid>
                                </Box>
                            </Grid>
                        </form>
                    </Card>
                </Box>
            </Modal>
        </>

    )
}

export default AddEditPopup