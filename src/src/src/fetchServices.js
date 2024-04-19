import axios from "axios";
import { baseURL } from "./configData";

export const GetData = async (url) => {
    try {
      const response = await axios.get(`${baseURL}${url}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      return error;
    }
  };

export const PostData = async (url,postData) => {
    try {
      const postResponse = await axios.post(`${baseURL}${url}`, postData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return postResponse;
    } catch (error) {
      return error;
    }
  };

export const UpdateData = async (url,id,data) => {
    try {
      const updateResponse = await axios.put(`${baseURL}${url}/${id}`,data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return updateResponse;
    } catch (error) {
      return error;
    }
  };

export const DeleteData = async (url) => {
    try {
      const response = await axios.delete(`${baseURL}${url}`,{
        headers: {
          'Content-Type': 'application/json',
        },
      });
      return response;
    } catch (error) {
      console.error('Error:', error);
    }
  };