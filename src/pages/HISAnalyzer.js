import React, { useEffect, useState } from 'react'
import { HisAnalyzerTableHeadings, analyzerParameterTableHeadings, data } from '../configData'
import TableData from '../components/TableComponent/TableData'
import { getAnalyzers, getHis, getHisAnalyzer, getHospital } from '../redux/actions/servicesActions'
import { useDispatch, useSelector } from 'react-redux'

const HISAnalyzer = () => {
  const dispatch = useDispatch();
  const URL = 'HisAnalyzer';
  const [data, setData] = useState([]);
  const { analyzerLists, hisAnalyzerList, hisList, hospitalList } = useSelector((state) => state.servicesReducer);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(prevRefresh => !prevRefresh);
  };

  useEffect(() => {
    dispatch(getHisAnalyzer(URL));
    dispatch(getAnalyzers('Analyzer'));
    dispatch(getHospital("Hospital"));
  }, [refresh])

  useEffect(() => {
    if (hisAnalyzerList && hisAnalyzerList?.length) {
      setData(hisAnalyzerList)
    }
  }, [hisAnalyzerList])

  return (
    <>
      <TableData
        url={URL}
        data={data}
        rerender={getHisAnalyzer}
        headingName={'HIS-Analyzer Mapping'}
        tableHeadings={HisAnalyzerTableHeadings}
        analyzersList={analyzerLists}
        hospitalList={hospitalList}
        showColor={true}
        analyzerDropDown={true}
        refresh={refresh}
        handleRefresh={handleRefresh}
      />
    </>
  )
}

export default HISAnalyzer