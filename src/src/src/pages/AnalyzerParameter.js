import React, { useEffect, useState } from 'react'
import { analyzerParameterTableHeadings, data } from '../configData'
import TableData from '../components/TableComponent/TableData'
import { getAnalyzers, getAnalyzersParameter, getLisCodes } from '../redux/actions/servicesActions'
import { useDispatch, useSelector } from 'react-redux'

const AnalyzerParameter = () => {
  const dispatch = useDispatch();
  const URL = 'AnalyzerParameter';
  const [data,setData] = useState([]);
  const {analyzerLists,analyzerParameterList,lisCodesList,} =  useSelector((state) => state.servicesReducer);

  useEffect(()=>{
    dispatch(getAnalyzersParameter(URL));
    dispatch(getAnalyzers('Analyzer'));
    dispatch(getLisCodes('LisCode'));
  },[])

  useEffect(()=>{
    if(analyzerParameterList && analyzerParameterList?.length){
      setData(analyzerParameterList)
    }
  },[analyzerParameterList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getAnalyzersParameter}
        headingName={'Analyzer Parameters'}
        tableHeadings={analyzerParameterTableHeadings}
        analyzersList={analyzerLists}
        LisCodesList={lisCodesList}
      />
    </>
  )
}

export default AnalyzerParameter