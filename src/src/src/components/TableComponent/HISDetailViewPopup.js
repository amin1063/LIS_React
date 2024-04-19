import { Card, Stack, Typography, Box, Modal, IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'

const HISDetailViewPopup = ({ detailsModalValue, editDataValue }) => {

    const [editValue, setEditValue] = editDataValue;
    const [hisOpenDetailsModal, setHisOpenDetailsModal] = detailsModalValue;
    const [dataKeys, setDataKeys] = useState({
        'Details': ['IsActive', 'UpdatedBy', 'UpdatedOn', 'CreatedBy', 'CreatedOn'],
        'HIS': [
            {label:'HIS Name',value:'HisName'},
            {label:'Test ID',value:'HisCode'},
            {label:'Test Name',value:'HparamName'},
            {label:'Range',value:'Hrange'},
            {label:'Unit',value:'Hunit'},
         ],
        'Analyzer': [
            {label:'Analyzer Name',value:'AnalyzerName'},
            {label:'Host Code',value:'AnalyzerCode'},
            {label:'Parameter Name',value:'AparamName'},
            {label:'Range',value:'Arange'},
            {label:'Unit',value:'Aunit'},
        ],
    })

    const upperCase = (data) => {
        if (data?.length) {
            return data.slice(0, 1).toUpperCase() + data.slice(1);
        }
    }

    // useEffect(() => {
    //     setDataKeys(Object.keys(editValue))
    // }, [editValue])

    const Close = () => {
        setHisOpenDetailsModal(false)
    }

    return (
        <>
            <Modal
                open={hisOpenDetailsModal}
                onClose={Close}
                sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '90%', height: '85%' }}>
                    <Card sx={{ position: 'relative', backgroundColor: '#f5f5f5', pb: '5px', minHeight: '100%', minWidth: '55%', maxHeight: '80vh', borderRadius: '20px', overflowY: 'scroll', textAlign: 'center', border: '1px solid black', boxShadow: '1px 2px 15px black' }}>
                        <Typography sx={{ fontSize: '28px', textAlign: 'center', padding: '10px', fontWeight: 'bold', color: 'white', backgroundColor: 'gray' }}>Details</Typography>
                        <Box sx={{ position: 'absolute', top: '10px', right: '10px' }}>
                            <IconButton onClick={Close} sx={{ color: '#ffffff', backgroundColor: 'black' }}>
                                <CloseIcon />
                            </IconButton>
                        </Box>
                        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-around', alignItems: 'center', textAlign: 'justify', padding: '0px', mt: 2 }}>
                            <Box sx={{ backgroundColor: '#f2c6ff', p: 2, borderRadius: "20px", pt: 1 }} >
                                <Typography variant='h5' sx={{ color: 'white', textAlign: 'center', fontWeight: '600', pb: 0.5 }}> HIS</Typography>
                                <Card sx={{ borderRadius: '20px', p: 3, pb: 0, py: 1.8,boxShadow:'5px 5px 10px'  }}>
                                    {dataKeys['HIS']?.map((item, i) => (
                                        <Stack key={i} direction={'row'} gap={1} sx={{ textAlign: 'justify', paddingBottom: '5px' }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: '#666', width: '120px' }}>{upperCase(item.label)}</Typography> : <Typography sx={{ fontSize: '16px', color: '#444', fontWeight: '600', ml: 1 }}>{editValue[item.value] || '-'}</Typography>
                                        </Stack>
                                    ))}
                                </Card>
                            </Box>
                            <Box sx={{ backgroundColor: '#94dde8', p: 2, pt: 1, borderRadius: "20px" }}>
                                <Typography variant='h5' sx={{ color: 'white', textAlign: 'center', fontWeight: '600', pb: 0.5 }}> Analyzer</Typography>
                                <Card sx={{ borderRadius: '20px', p: 3, pb: 0, py: 1.8,boxShadow:'5px 5px 10px' }}>
                                    {dataKeys['Analyzer']?.map((item, i) => (
                                        <Stack key={i} direction={'row'} gap={1} sx={{ textAlign: 'justify', paddingBottom: '5px' }}>
                                            <Typography sx={{ fontSize: '16px', fontWeight: 'bold', color: '#666', width: '130px' }}>{upperCase(item.label)}</Typography> : <Typography sx={{ fontSize: '16px', color: '#444', fontWeight: '600', ml: 1 }}>{editValue[item.value] || '-'}</Typography>
                                        </Stack>
                                    ))}
                                </Card>
                            </Box>
                        </Box>
                        <Card sx={{ width: '90%', margin: '0 auto', my: 3, p: 2 }}>
                            {dataKeys['Details']?.map((item, i) => (
                                <Stack key={i} direction={'row'} gap={1} sx={{ textAlign: 'justify' }}>
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', color: '#666', width: '120px' }}>{upperCase(item)}</Typography> :
                                    <Typography sx={{ fontSize: '14px', color: '#444', fontWeight: '600', ml: 1 }}>
                                        {item == 'isActive' ?
                                            editValue[item] == true ? 'True' : 'False' :
                                            editValue[item] || '-'
                                        }
                                    </Typography>
                                </Stack>
                            ))}

                        </Card>
                    </Card>
                </Box>
            </Modal>
        </>
    )
}

export default HISDetailViewPopup;