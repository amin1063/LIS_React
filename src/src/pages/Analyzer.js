import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { data, analyzerTableHeadings } from '../configData';
import { GetData } from '../fetchServices';
import { useDispatch, useSelector } from 'react-redux';
import { getAnalyzers } from '../redux/actions/servicesActions';

const Analyzer = () => {
  const URL = 'Analyzer';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const analyzerLists =  useSelector((state) => state.servicesReducer.analyzerLists);

  useEffect(()=>{
    dispatch(getAnalyzers(URL));
  },[])
  
  useEffect(()=>{
    if(analyzerLists && analyzerLists?.length){
      setData(analyzerLists)
    }
  },[analyzerLists])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getAnalyzers}
        headingName={'Analyzers'}
        tableHeadings={analyzerTableHeadings}
      />
    </>
  )
}

export default Analyzer