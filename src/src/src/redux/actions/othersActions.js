import {GetData} from "../../fetchServices";
import { ERROR_ALERT, GET_GENLOOKUPS, GET_MODULES, GET_ROLES, GET_ROLE_MODULES, GET_USERS } from "../ActionTypes";

export const getGenLookups = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_GENLOOKUPS,
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

export const getModules = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_MODULES,
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

export const getRoleModules = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ROLE_MODULES,
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

export const getRoles = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_ROLES,
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

export const getUsers = (url) => async (dispatch) => {
    try {
      const response = await GetData(url);
      if(response.status === 200 ){
        dispatch({
          type: GET_USERS,
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
