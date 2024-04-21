import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { orderMastersTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderDetails, getOrderMasters } from '../redux/actions/invoiceOrderActions';
import { getTestOrderAll } from '../redux/actions/servicesActions';

const OrderMasters = () => {
  const URL = 'TestOrder/getall';
  const [data, setData] = useState([]);
  const dispatch = useDispatch()
  const testOrderAllList = useSelector((state) => state.servicesReducer.testOrderAllList);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };


  useEffect(() => {
    dispatch(getTestOrderAll(URL));
    // dispatch(getOrderMasters(URL));
    // dispatch(getOrderDetails('OrderDetail'));
  }, [refresh])

  useEffect(() => {
    if (testOrderAllList && testOrderAllList?.length) {
      let formattedData = [];
      testOrderAllList?.forEach(order => {
        const { OrderMaster, OrderDetails } = order;
        const formattedOrder = {
          ...OrderMaster, OrderDetails
        }
        formattedData.push(formattedOrder)
      })
      setData(formattedData)
    }
  }, [testOrderAllList])


  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getTestOrderAll}
        headingName={'OrderMasters'}
        tableHeadings={orderMastersTableHeadings}
        handleRefresh={handleRefresh}
      />
    </>
  )
}

export default OrderMasters