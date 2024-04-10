import { DATA_LOADER, FETCH_FAIL, GET_INVOICE_DETAILS, GET_INVOICE_MASTERS, GET_ORDER_DETAILS, GET_ORDER_MASTERS } from "../ActionTypes";

const initialState = {
    loading: false,
    invoiceDetailsList:[],
    invoiceMastersList:[],
    orderDetailsList:[],
    orderMastersList:[],
};

const invoiceOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOADER: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case GET_INVOICE_DETAILS: {
        return {
          ...state,
          loading: false,
          invoiceDetailsList: action.payload,
        };
      }
      case GET_INVOICE_MASTERS: {
        return {
          ...state,
          loading: false,
          invoiceMastersList: action.payload,
        };
      }
      case GET_ORDER_DETAILS: {
        return {
          ...state,
          loading: false,
          orderDetailsList: action.payload,
        };
      }
      case GET_ORDER_MASTERS: {
        return {
          ...state,
          loading: false,
          orderMastersList: action.payload,
        };
      }
      case FETCH_FAIL:
        return {
          ...state,
          loading: false,
        };
      default: {
        return state;
      }
    }
};

export default invoiceOrderReducer;