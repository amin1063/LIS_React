import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { cptsTableHeadings, data } from '../configData'
import { getCpt } from '../redux/actions/servicesActions'
import { useDispatch, useSelector } from 'react-redux'

const CPT = () => {
  const dispatch = useDispatch();
  const URL = 'Cpt';
  const [data,setData] = useState([]);
  const cptList =  useSelector((state) => state.servicesReducer.cptList);

  useEffect(()=>{
    dispatch(getCpt(URL));
  },[])
  
  useEffect(()=>{
    if(cptList && cptList?.length){
      setData(cptList)
    }
  },[cptList])

  return (
    <>
     <TableData 
       url={URL}
       data={data}
       rerender = {getCpt}
       headingName={'CPT'}
       tableHeadings={cptsTableHeadings}
     />
    </>
  )
}

export default CPT