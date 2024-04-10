import React, { useEffect, useState } from 'react'
import TableData from '../components/TableComponent/TableData'
import { roleModulesTableHeadings } from '../configData';
import { useDispatch, useSelector } from 'react-redux';
import { getRoleModules } from '../redux/actions/othersActions';

const RoleModules = () => {
  const URL = 'RoleModule';
  const [data,setData] = useState([]);
  const dispatch = useDispatch()
  const roleModuleList =  useSelector((state) => state.othersReducer.roleModuleList);

  useEffect(()=>{
    dispatch(getRoleModules(URL));
  },[])
  
  useEffect(()=>{
    if(roleModuleList && roleModuleList?.length){
      setData(roleModuleList)
    }
  },[roleModuleList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender = {getRoleModules}
        headingName={'RoleModules'}
        tableHeadings={roleModulesTableHeadings}
      />
    </>
  )
}

export default RoleModules