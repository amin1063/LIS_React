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

  useEffect(()=>{
    dispatch(getPathologyResultMasters(URL));
    dispatch(getPathologyResultDetails('PathologyResultDetail'));
  },[])
  
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
      />
    </>
  )
}

export default PathologyResultMasters