import {GetData} from "../../fetchServices";
import { ERROR_ALERT, GET_HEART_BEAT, GET_PATHOLOGY_PENDING_QUEUES, GET_PATHOLOGY_RESULT_DETAILS, GET_PATHOLOGY_RESULT_MASTERS } from "../ActionTypes";

export const getPathologyPendingQueues = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_PATHOLOGY_PENDING_QUEUES,
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

export const getPathologyResultDetails = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_PATHOLOGY_RESULT_DETAILS,
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

export const getPathologyResultMasters = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_PATHOLOGY_RESULT_MASTERS,
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

export const getHeartBeat = (url) => async (dispatch) => {
  try {
    const response = await GetData(url);
    if(response.status === 200 ){
      dispatch({
        type: GET_HEART_BEAT,
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
