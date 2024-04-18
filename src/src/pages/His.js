import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, HisTableHeadings } from '../configData';
import { GetData } from '../fetchServices';
import { useDispatch, useSelector } from 'react-redux';
import { getHis } from '../redux/actions/servicesActions';

const His = () => {
  const URL = 'His';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const hisList =  useSelector((state) => state.servicesReducer.hisList);

  useEffect(()=>{
    dispatch(getHis(URL));
  },[])
  
  useEffect(()=>{
    if(hisList && hisList?.length){
      setData(hisList)
    }
  },[hisList])
  
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getHis}
        headingName={'HIS'}
        tableHeadings={HisTableHeadings}
      />
    </>
  )
}

export default His