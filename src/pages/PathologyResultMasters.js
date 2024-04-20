import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { pathologyResultMastersTableHeadings } from '../configData';
import { getPathologyResultDetails, getPathologyResultMasters } from '../redux/actions/pathologyActions';
import { useDispatch, useSelector } from 'react-redux';

const PathologyResultMasters = () => {
  const URL = 'PathologyResultMaster';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyResultMastersList =  useSelector((state) => state.pathologyReducer.pathologyResultMastersList);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };

  useEffect(()=>{
    dispatch(getPathologyResultMasters(URL));
    dispatch(getPathologyResultDetails('PathologyResultDetail'));
  },[refresh])
  
  useEffect(()=>{
    if(pathologyResultMastersList && pathologyResultMastersList?.length){
      setData(pathologyResultMastersList)
    }
  },[pathologyResultMastersList])
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getPathologyResultMasters}
        headingName={'Samples'}
        tableHeadings={pathologyResultMastersTableHeadings}
        readable={true}
        handleRefresh={handleRefresh}
      />
    </>
  )
}

export default PathologyResultMasters