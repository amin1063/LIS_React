import { GetData } from "../../fetchServices";
import { ERROR_ALERT, GET_TEST_CATEGORIES, GET_TEST_PARAMETERS, GET_TEST_SAMPLES, GET_TEST_UNITS } from "../ActionTypes";

export const getTestCategories = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
            if(response.status === 200 ){
        dispatch({
          type: GET_TEST_CATEGORIES,
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

export const getTestParameter = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_TEST_PARAMETERS,
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

export const getTestSamples = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_TEST_SAMPLES,
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

export const getTestUnits = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_TEST_UNITS,
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
