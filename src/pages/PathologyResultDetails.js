import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { pathologyResultDetailsTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getPathologyResultDetails } from '../redux/actions/pathologyActions';

const PathologyResultDetails = () => {
  const URL = 'PathologyResultDetail';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyResultDetailsList =  useSelector((state) => state.pathologyReducer.pathologyResultDetailsList);

  useEffect(()=>{
    dispatch(getPathologyResultDetails(URL));
  },[])
  
  useEffect(()=>{
    if(pathologyResultDetailsList && pathologyResultDetailsList?.length){
      setData(pathologyResultDetailsList)
    }
  },[pathologyResultDetailsList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getPathologyResultDetails}
        headingName={'PathologyResultDetails'}
        tableHeadings={pathologyResultDetailsTableHeadings}
        readable={true}
      />
    </>
  )
}

export default PathologyResultDetails