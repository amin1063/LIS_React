import { Card, Stack, Typography, Box, Modal, IconButton, Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, CircularProgress } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import '../../App.css'
import { useSelector } from 'react-redux';
import { SampleDetailsTableHeadings, orderDetailsTableHeadings } from '../../configData';

const SampleIdDetailPopup = ({ detailsModalValue, editDataValue,sampleFilterId,url }) => {

  const [editValue, setEditValue] = editDataValue;
  const [openDetailsModal, setOpenDetailsModal] = detailsModalValue;
  const [dataKeys, setDataKeys] = useState([])
  const pathologyResultDetailsList = useSelector((state) => state.pathologyReducer.pathologyResultDetailsList);
  const orderDetailsList =  useSelector((state) => state.invoiceOrderReducer.orderDetailsList);
  const [detailsList, setDetailsList] = useState([]);
  const [detailsTableHeading, setDetailsTableHeading] = useState([]);
  const [loading, setLoading] = useState(true)
  const detailsData = [
    {label:'Name',value:'Patient'},
    {label:'MRN',value:'MRN'},
    {label:'Received',value:'Received'},
    {label:'Collected',value:'Collected'},
    {label:'Order',value:'Order'},
    // {label:'OrderDetail ID',value:'OrderDetailId'},
    {label:'Sent',value:'Sent'},
    {label:'Sample ID',value:'SampleId'},
    // {label:'CPT Name',value:'CPTName'},
  ]
  const dateArray = ['Received','Collected','CreatedOn','UpdatedOn','Order']

  const currentDate = new Date().toISOString();

  const DateConvertion = (myDate) => {
      const utcDateTime = new Date(myDate);
      const formattedDateTime = utcDateTime.toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });
      return formattedDateTime
  }

  const upperCase = (data) => {
    if (data?.length) {
      return data.slice(0, 1).toUpperCase() + data.slice(1)
    }
  }


  const checkAbnormalValue =(val)=>{
    let check = val?.split('').includes('A')
    return check
  }

  useEffect(()=>{
    if(url == 'OrderMaster'){
      setDetailsTableHeading(orderDetailsTableHeadings)
    }else{
      setDetailsTableHeading(SampleDetailsTableHeadings)
    }

  },[url])

  useEffect(() => {
    if (pathologyResultDetailsList?.length || orderDetailsList?.length ) {
      let filterby ;
      if(url == 'OrderMaster'){
        filterby = orderDetailsList;
      }else{
        filterby = pathologyResultDetailsList;
      }
      let data;
      if( sampleFilterId == 'MRN'){
        data = filterby.filter((item, i) => item.MRN == editValue.MRN)
      }else{

        data = filterby.filter((item, i) => item.SampleID == editValue.SampleId)

      }
      
      setDetailsList(data)
      setLoading(false)
    }
  }, [pathologyResultDetailsList,editValue,sampleFilterId,orderDetailsList])

  const Close = () => {
    setOpenDetailsModal(false)
  }

  console.log('orderDetailsList',orderDetailsList)
  console.log('editValue',editValue)

  return (
    <>
      <Modal
        open={openDetailsModal}
        onClose={Close}
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center',maxWidth:'60vw',margin:'0 auto' }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
          <Card sx={{ position: 'relative', backgroundColor: '#f5f5f5', pb: '5px', minWidth: '40%', maxHeight: '90vh', borderRadius: '20px', overflowY: 'scroll', textAlign: 'center', border: '1px solid black', boxShadow: '1px 2px 15px black' }}>
            <Typography sx={{ fontSize: '25px', textAlign: 'center', padding: '5px', fontWeight: 'bold', color: 'white', backgroundColor: 'gray' }}>Details</Typography>
            <Box sx={{ position: 'absolute', top: '4px', right: '5px' }}>
              <IconButton onClick={Close} sx={{ color: '#ffffff', backgroundColor: 'black',p:1 }}>
                <CloseIcon fontSize='small' />
              </IconButton>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'justify', padding: '0 20px', mt: 2 }}>
                            <Card sx={{ width: '100%', margin: '0 auto', my: 0,mb:2, p: 2,display:'flex',justifyContent:'space-between',flexWrap:'wrap' }}>
                            {detailsData.map((item, i) => (
                                <Stack key={i}  direction={'row'} gap={1} sx={{ 
                                  width:'50%',
                                  textAlign: 'justify',
                                  // backgroundColor: item.label == 'Name'? 'black': item.label == 'MRN'?'black':'white',
                                  // color: item.label == 'Name'? 'white': item.label == 'MRN'?'white':'black',
                                  // padding: item.label == 'Name'? '3px': item.label == 'MRN' ? '3px':'0px',
                                  }}
                                  >
                                    <Typography sx={{ fontSize: '14px', fontWeight: 'bold', width: '120px',color:'#666' }}>{item.label}</Typography> :
                                    {dateArray.includes(item.label) ? 
                                    <Typography sx={{ fontSize: '14px', fontWeight: '600', ml: 1,color:'#444' }}>
                                       { `${editValue[item.value] || DateConvertion(currentDate)}`}
                                    </Typography> :
                                    item.label == "Sample ID" ?
                                    <Typography sx={{ fontSize: '14px', fontWeight: '600', ml: 1,color:'#444' }}>
                                       { `${editValue[item.value] || editValue['SampleID'] || '-'}`}
                                    </Typography>
                                    :
                                    <Typography sx={{ fontSize: '14px', fontWeight: '600', ml: 1,color:'#444' }}>
                                       { `${editValue[item.value] || '-'}`}
                                    </Typography>
                                    }
                                </Stack>
                            ))}

                        </Card>
              <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {detailsTableHeading.map((column) => (
                          <TableCell
                            key={column.id}
                            sx={{ color: 'black',fontWeight:'bold',backgroundColor:'lightgray' }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {loading ? (
                        <TableRow>
                          <TableCell colSpan={detailsTableHeading?.length} sx={{ paddingY: '10px', textAlign: 'center', fontSize: '13px', fontWeight: '600' }}>
                            <CircularProgress color="primary" />
                          </TableCell>
                        </TableRow>
                      ) : (

                        detailsList.map((row, rowId) => {
                          return (
                            <TableRow hover
                              key={row.id}>
                              {detailsTableHeading?.map((column) => {
                                const value = row[column.id];
                                if (column == 'id') {
                                  return (
                                    <TableCell key={column.id} >
                                      {rowId + 1}
                                    </TableCell>
                                  )
                                } else {
                                  return (
                                    <TableCell key={column.id} sx={{fontWeight: checkAbnormalValue(row?.AbnormalFlag) ? 'bold':'normal'}} >
                                    {/* <TableCell key={column.id} sx={{fontWeight: ["A","H~A"].includes(row?.AbnormalFlag) ? 'bold':'normal'}} > */}
                                      {value || 'null'}
                                    </TableCell>
                                  );
                                }
                              })}
                            </TableRow>
                          );
                        })
                      )}

                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Box>
          </Card>
        </Box>
      </Modal>
    </>
  )
}

export default SampleIdDetailPopup;