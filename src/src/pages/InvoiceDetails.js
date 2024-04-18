import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { invoiceDetailsTableHeadings } from '../configData';
import { getInvoiceDetails } from '../redux/actions/invoiceOrderActions';
import { useDispatch, useSelector } from 'react-redux';

const InvoiceDetails = () => {
  const URL = 'InvoiceDetail';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const invoiceDetailsList =  useSelector((state) => state.invoiceOrderReducer.invoiceDetailsList);

  useEffect(()=>{
    dispatch(getInvoiceDetails(URL));
  },[])
  
  useEffect(()=>{
    if(invoiceDetailsList && invoiceDetailsList?.length){
      setData(invoiceDetailsList)
    }
  },[invoiceDetailsList])
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getInvoiceDetails}
        headingName={'InvoiceDetails'}
        tableHeadings={invoiceDetailsTableHeadings}
      />
    </>
  )
}

export default InvoiceDetails