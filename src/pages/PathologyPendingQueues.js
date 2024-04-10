import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { pathologyPendingQueuesTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getPathologyPendingQueues } from '../redux/actions/pathologyActions';

const PathologyPendingQueues = () => {
  const URL = 'PathologyPendingQueue';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const pathologyPendingQueuesList =  useSelector((state) => state.pathologyReducer.pathologyPendingQueuesList);

  useEffect(()=>{
    dispatch(getPathologyPendingQueues(URL));
  },[])
  
  useEffect(()=>{
    if(pathologyPendingQueuesList && pathologyPendingQueuesList?.length){
      setData(pathologyPendingQueuesList)
    }
  },[pathologyPendingQueuesList])
  
  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getPathologyPendingQueues}
        headingName={'PathologyPendingQueues'}
        tableHeadings={pathologyPendingQueuesTableHeadings}
        readable={true}
      />
    </>
  )
}

export default PathologyPendingQueues