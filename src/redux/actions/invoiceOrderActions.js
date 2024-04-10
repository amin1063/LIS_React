import {GetData} from "../../fetchServices";
import { ERROR_ALERT, GET_INVOICE_DETAILS, GET_INVOICE_MASTERS, GET_ORDER_DETAILS, GET_ORDER_MASTERS } from "../ActionTypes";

export const getInvoiceDetails = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_INVOICE_DETAILS,
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

export const getInvoiceMasters = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_INVOICE_MASTERS,
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

export const getOrderDetails = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ORDER_DETAILS,
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
export const getOrderMasters = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ORDER_MASTERS,
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
