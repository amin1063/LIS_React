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
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };
  

  useEffect(()=>{
    dispatch(getOrderMasters(URL));
    dispatch(getOrderDetails('OrderDetail'));
  },[refresh])
  
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
        handleRefresh={handleRefresh}
      />
    </>
  )
}

export default OrderMasters