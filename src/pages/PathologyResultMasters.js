import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { pathologyResultMastersTableHeadings } from '../configData';
import { getPathologyResultDetails, getPathologyResultMasters } from '../redux/actions/pathologyActions';
import { useDispatch, useSelector } from 'react-redux';
import { getTestOrderAll, getTestResults } from '../redux/actions/servicesActions';

const PathologyResultMasters = () => {
  const URL = 'TestResult';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyResultMastersList =  useSelector((state) => state.pathologyReducer.pathologyResultMastersList);
  const testResultsList =  useSelector((state) => state.servicesReducer.testResultsList);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };

  useEffect(()=>{
    dispatch(getTestResults(URL))
    // dispatch(getPathologyResultMasters(URL));
    // dispatch(getPathologyResultDetails('PathologyResultDetail'));
  },[refresh])
  
  useEffect(()=>{
    if(testResultsList && testResultsList?.length){
   
      setData(testResultsList)
    }
  },[testResultsList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getTestResults}
        headingName={'Pathology Result'}
        tableHeadings={pathologyResultMastersTableHeadings}
        readable={true}
        handleRefresh={handleRefresh}
      />
    </>
  )
}

export default PathologyResultMasters