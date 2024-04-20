import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, hospitalTableHeadings } from '../configData';
import { GetData } from '../fetchServices';
import { useDispatch, useSelector } from 'react-redux';
import { getHospital } from '../redux/actions/servicesActions';

const Hospital = () => {
  const URL = 'Hospital';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const hospitalList =  useSelector((state) => state.servicesReducer.hospitalList);

  useEffect(()=>{
    dispatch(getHospital(URL));
  },[])
  
  useEffect(()=>{
    if(hospitalList && hospitalList?.length){
      setData(hospitalList)
    }
  },[hospitalList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getHospital}
        headingName={'Hospital'}
        tableHeadings={hospitalTableHeadings}
      />
    </>
  )
}

export default Hospital