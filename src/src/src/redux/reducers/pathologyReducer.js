import { DATA_LOADER, FETCH_FAIL, GET_HEART_BEAT, GET_PATHOLOGY_PENDING_QUEUES, GET_PATHOLOGY_RESULT_DETAILS, GET_PATHOLOGY_RESULT_MASTERS, } from "../ActionTypes";

const initialState = {
    loading: false,
    pathologyPendingQueuesList:[],
    pathologyResultDetailsList:[],
    pathologyResultMastersList:[],
    heartBeatList:[],
};

const pathologyReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOADER: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case GET_PATHOLOGY_PENDING_QUEUES: {
        return {
          ...state,
          loading: false,
          pathologyPendingQueuesList: action.payload,
        };
      }
      case GET_PATHOLOGY_RESULT_DETAILS: {
        return {
          ...state,
          loading: false,
          pathologyResultDetailsList: action.payload,
        };
      }
      case GET_PATHOLOGY_RESULT_MASTERS: {
        return {
          ...state,
          loading: false,
          pathologyResultMastersList: action.payload,
        };
      }
      case GET_HEART_BEAT: {
        return {
          ...state,
          loading: false,
          heartBeatList: action.payload,
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

export default pathologyReducer;