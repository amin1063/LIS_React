import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { orderMastersTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, getOrderMasters } from '../redux/actions/invoiceOrderActions';

const OrderMasters = () => {
  const URL = 'OrderMaster';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const orderMastersList =  useSelector((state) => state.invoiceOrderReducer.orderMastersList);

  useEffect(()=>{
    dispatch(getOrderMasters(URL));
    dispatch(getOrderDetails('OrderDetail'));
  },[])
  
  useEffect(()=>{
    if(orderMastersList && orderMastersList?.length){
      setData(orderMastersList)
    }
  },[orderMastersList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getOrderMasters}
        headingName={'OrderMasters'}
        tableHeadings={orderMastersTableHeadings}
      />
    </>
  )
}

export default OrderMasters