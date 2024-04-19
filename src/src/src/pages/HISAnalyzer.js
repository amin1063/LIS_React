import React, { useEffect, useState } from 'react'
import { HisAnalyzerTableHeadings, analyzerParameterTableHeadings, data } from '../configData'
import TableData from '../components/TableComponent/TableData'
import { getAnalyzers, getHis, getHisAnalyzer } from '../redux/actions/servicesActions'
import { useDispatch, useSelector } from 'react-redux'

const HISAnalyzer = () => {
  const dispatch = useDispatch();
  const URL = 'HisAnalyzer';
  const [data,setData] = useState([]);
  const {analyzerLists,hisAnalyzerList,hisList} =  useSelector((state) => state.servicesReducer);

  useEffect(()=>{
    dispatch(getHisAnalyzer(URL));
    dispatch(getAnalyzers('Analyzer'));
    dispatch(getHis('His'));
  },[])

  useEffect(()=>{
    if(hisAnalyzerList && hisAnalyzerList?.length){
      setData(hisAnalyzerList)
    }
  },[hisAnalyzerList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getHisAnalyzer}
        headingName={'HIS-Analyzer Mapping'}
        tableHeadings={HisAnalyzerTableHeadings}
        analyzersList={analyzerLists}
        hisList={hisList}
        showColor={true}
        analyzerDropDown={true}
      />
    </>
  )
}

export default HISAnalyzer