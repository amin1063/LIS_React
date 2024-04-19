import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, liscodesTableHeadings } from '../configData'
import { useDispatch, useSelector } from 'react-redux'
import { getLisCodes } from '../redux/actions/servicesActions'

const LISCode = () => {
  const dispatch = useDispatch();
  const URL = 'LisCode';
  const [data,setData] = useState([]);
  const lisCodesList =  useSelector((state) => state.servicesReducer.lisCodesList);

  useEffect(()=>{
    dispatch(getLisCodes(URL));
  },[])
  
  useEffect(()=>{
    if(lisCodesList && lisCodesList?.length){
      setData(lisCodesList)
    }
  },[lisCodesList])

  return (
    <>
     <TableData
        url={URL}
        data={data}
        rerender = {getLisCodes}
        headingName={'LIS Codes'}
        tableHeadings={liscodesTableHeadings}
      />
    </>
  )
}

export default LISCode