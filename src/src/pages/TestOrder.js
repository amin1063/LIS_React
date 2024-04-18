import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { TestOrderHeadings } from '../configData';
import { GetData } from '../fetchServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAnalyzers, getCpt, getTestOrder } from '../redux/actions/servicesActions';

const TestOrder = () => {
  const URL = 'TestOrder';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testOrderList =  useSelector((state) => state.servicesReducer.testOrderList);
  const cptList =  useSelector((state) => state.servicesReducer.cptList);

  useEffect(()=>{
    dispatch(getTestOrder(URL));
    dispatch(getCpt('Cpt'));
  },[])
  
  useEffect(()=>{
    if(testOrderList && testOrderList?.length){
      const combinedOrders = testOrderList.map(order => {
        const { OrderMaster, OrderDetails } = order;
        const combinedOrder = {
            ...OrderMaster, 
            ...OrderDetails[0]
        };
        return combinedOrder;
    });
      setData(combinedOrders)
    }
  },[testOrderList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getTestOrder}
        headingName={'Test Orders'}
        tableHeadings={TestOrderHeadings}
        cptList={cptList}
      />
    </>
  )
}

export default TestOrder;