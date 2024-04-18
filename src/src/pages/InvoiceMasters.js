import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { invoiceMastersTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getInvoiceMasters } from '../redux/actions/invoiceOrderActions';

const InvoiceMasters = () => {
  const URL = 'InvoiceMaster';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const invoiceMastersList =  useSelector((state) => state.invoiceOrderReducer.invoiceMastersList);

  useEffect(()=>{
    dispatch(getInvoiceMasters(URL));
  },[])
  
  useEffect(()=>{
    if(invoiceMastersList && invoiceMastersList?.length){
      setData(invoiceMastersList)
    }
  },[invoiceMastersList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getInvoiceMasters}
        headingName={'InvoiceMasters'}
        tableHeadings={invoiceMastersTableHeadings}
      />
    </>
  )
}

export default InvoiceMasters