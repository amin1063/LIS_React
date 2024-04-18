import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { genLookupsTableHeadings } from '../configData';
import { getGenLookups } from '../redux/actions/othersActions';
import { useDispatch, useSelector } from 'react-redux';

const GenLookups = () => {
  const URL = 'GenLookup';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const genLookupsList =  useSelector((state) => state.othersReducer.genLookupsList);

  useEffect(()=>{
    dispatch(getGenLookups(URL));
  },[])
  
  useEffect(()=>{
    if(genLookupsList && genLookupsList?.length){
      setData(genLookupsList)
    }
  },[genLookupsList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getGenLookups}
        headingName={'GenLookups'}
        tableHeadings={genLookupsTableHeadings}
      />
    </>
  )
}

export default GenLookups