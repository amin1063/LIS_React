import { DeleteData, GetData, PostData, UpdateData } from "../../fetchServices";
import { DATA_LOADER, ERROR_ALERT, FETCH_FAIL, GET_ANALYZERS, GET_ANALYZERS_PARAMETER, GET_COMBINED_ORDER, GET_CPT, GET_HIS, GET_HIS_ANALYZER, GET_HOSPITALS, GET_LISCODE, GET_TEST_ORDER_ALL, GET_TEST_RESULTS, INFO_ALERT, SUCCESS_ALERT } from "../ActionTypes";

export const getAnalyzers = (url) => async (dispatch) => {
    // dispatch({
    //     type: DATA_LOADER,
    //   });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ANALYZERS,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getAnalyzersParameter = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ANALYZERS_PARAMETER,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getCpt = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_CPT,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getLisCodes = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_LISCODE,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getHis = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_HIS,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getHisAnalyzer = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_HIS_ANALYZER,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};
export const getTestOrder = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_COMBINED_ORDER,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getTestOrderAll = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_TEST_ORDER_ALL,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};
export const getTestResults = (url) => async (dispatch) => {
    dispatch({
        type: DATA_LOADER,
      });
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_TEST_RESULTS,
          payload: response.data,
        });
      }else if(response.response.status === 500){
        dispatch({
          type: ERROR_ALERT,
          payload: response.message,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const getHospital = (url) => async (dispatch) => {
  // dispatch({
  //     type: DATA_LOADER,
  //   });
  try {
    const response = await GetData(url);
    if(response.status === 200 ){
      dispatch({
        type: GET_HOSPITALS,
        payload: response.data,
      });
    }else if(response.response.status === 500){
      dispatch({
        type: ERROR_ALERT,
        payload: response.message,
      });
    }
  } catch (error) {
    console.log("err",error);
  }
};

export const addDataAction= (url,data,rerender) => async (dispatch) => {
    try {
      const response = await PostData(url,data);
      if(response.status === 201 || response.status === 200){
        dispatch({
          type: SUCCESS_ALERT,
          payload: 'Data added successfully.',
        });
        dispatch(rerender(url))
      }else if(response.response.status === 409){
        dispatch({
          type: ERROR_ALERT,
          payload:response.response.data.Message || response.response.data,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const updateDataAction= (url,id,data,rerender) => async (dispatch) => {
    try {
      const response = await UpdateData(url,id,data);
      if(response?.status === 204){
        dispatch({
          type: INFO_ALERT,
          payload: 'Data Updated successfully.',
        });
        dispatch(rerender(url))
      }else if(response.response.status === 409){
        dispatch({
          type: ERROR_ALERT,
          payload: response.response.data.Message || response.response.data,
        });
      }
    } catch (error) {
      console.log("err",error);
    }
};

export const deleteAnalyzers = (url,id,rerender) => async (dispatch) => {
    try {
      const response = await DeleteData(`${url}/${id}`);
      if(response.status === 200){
        dispatch({
          type: SUCCESS_ALERT,
          payload: 'Data Deleted successfully.',
        });
        dispatch(rerender(url))
      }
    } catch (error) {
      console.log("err",error);
    }
};