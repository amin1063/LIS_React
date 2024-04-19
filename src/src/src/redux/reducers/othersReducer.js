import { DATA_LOADER, FETCH_FAIL, GET_GENLOOKUPS, GET_MODULES, GET_ROLES, GET_ROLE_MODULES, GET_USERS } from "../ActionTypes";

const initialState = {
    loading: false,
    usersList:[],
    genLookupsList:[],
    modulesList:[],
    roleModuleList:[],
    rolesList:[],
};

const othersReducer = (state = initialState, action) => {
    switch (action.type) {
      case DATA_LOADER: {
        return {
          ...state,
          loading: action.payload,
        };
      }
      case GET_GENLOOKUPS: {
        return {
          ...state,
          loading: false,
          genLookupsList: action.payload,
        };
      }
      case GET_MODULES: {
        return {
          ...state,
          loading: false,
          modulesList: action.payload,
        };
      }
      case GET_ROLE_MODULES: {
        return {
          ...state,
          loading: false,
          roleModuleList: action.payload,
        };
      }
      case GET_ROLES: {
        return {
          ...state,
          loading: false,
          rolesList: action.payload,
        };
      }
      case GET_USERS: {
        return {
          ...state,
          loading: false,
          usersList: action.payload,
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

export default othersReducer;