import { DATA_LOADER, FETCH_FAIL, GET_TEST_CATEGORIES, GET_TEST_PARAMETERS, GET_TEST_SAMPLES, GET_TEST_UNITS } from "../ActionTypes";

const initialState = {
    loading: false,
    testCategoriesList:[],
    testParameterList:[],
    testSamplesList:[],
    testUnitsList:[],
};

const testsReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOADER: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case GET_TEST_CATEGORIES: {
        return {
          ...state,
          loading: false,
          testCategoriesList: action.payload,
        };
      }
      case GET_TEST_PARAMETERS: {
        return {
          ...state,
          loading: false,
          testParameterList: action.payload,
        };
      }
      case GET_TEST_SAMPLES: {
        return {
          ...state,
          loading: false,
          testSamplesList: action.payload,
        };
      }
      case GET_TEST_UNITS: {
        return {
          ...state,
          loading: false,
          testUnitsList: action.payload,
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

export default testsReducer;