import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { testUnitTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getTestUnits } from '../redux/actions/testsActions';

const TestUnits = () => {
  const URL = 'TestUnit';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const testUnitsList =  useSelector((state) => state.testsReducer.testUnitsList);

  useEffect(()=>{
    dispatch(getTestUnits(URL));
  },[])
  
  useEffect(()=>{
    if(testUnitsList && testUnitsList?.length){
      setData(testUnitsList)
    }
  },[testUnitsList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getTestUnits}
        headingName={'TestUnits'}
        tableHeadings={testUnitTableHeadings}
      />
    </>
  )
}

export default TestUnits