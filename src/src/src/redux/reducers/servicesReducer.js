import { DATA_LOADER, FETCH_FAIL, GET_ANALYZERS, GET_ANALYZERS_PARAMETER, GET_COMBINED_ORDER, GET_CPT, GET_HIS, GET_HIS_ANALYZER, GET_LISCODE } from "../ActionTypes";

const initialState = {
    loading: false,
    analyzerLists:[],
    analyzerParameterList:[],
    cptList:[],
    lisCodesList:[],
    hisList:[],
    hisAnalyzerList:[],
    testOrderList:[],
};

const servicesReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOADER: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case GET_ANALYZERS: {
        return {
          ...state,
          loading: false,
          analyzerLists: action.payload,
        };
      }
      case GET_ANALYZERS_PARAMETER: {
        return {
          ...state,
          loading: false,
          analyzerParameterList: action.payload,
        };
      }
      case GET_CPT: {
        return {
          ...state,
          loading: false,
          cptList: action.payload,
        };
      }
      case GET_LISCODE: {
        return {
          ...state,
          loading: false,
          lisCodesList: action.payload,
        };
      }
      case GET_HIS: {
        return {
          ...state,
          loading: false,
          hisList: action.payload,
        };
      }
      case GET_HIS_ANALYZER: {
        return {
          ...state,
          loading: false,
          hisAnalyzerList: action.payload,
        };
      }
      case GET_COMBINED_ORDER: {
        return {
          ...state,
          loading: false,
          testOrderList: action.payload,
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

export default servicesReducer;