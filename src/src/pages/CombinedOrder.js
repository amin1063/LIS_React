import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { TestOrderHeadings } from '../configData';
import { GetData } from '../fetchServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAnalyzers, getCombinedOrder, getTestOrder } from '../redux/actions/servicesActions';

const CombinedOrder = () => {
  const URL = 'TestOrder';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testOrderList =  useSelector((state) => state.servicesReducer.testOrderList);

  useEffect(()=>{
    dispatch(getTestOrder(URL));
  },[])
  
  useEffect(()=>{
    if(testOrderList && testOrderList?.length){
      const combinedOrders = testOrderList.map(order => {
        const { OrderMaster, OrderDetails } = order;
        const combinedOrder = {
            ...OrderMaster,  // Spread OrderMaster
            ...OrderDetails
        };
        // console.log("hhhh",combinedOrder);/
    
        // return combinedOrder;
    });
      // let newData = ''
      // console.log("test--",combinedOrders);

      // setData(testOrderList)
    }
  },[testOrderList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getAnalyzers}
        headingName={'Test Orders'}
        tableHeadings={TestOrderHeadings}
      />
    </>
  )
}

export default CombinedOrder