import * as types from "../actions/search/actionTypes";

const initialState = {
  query: "",
  list: [],
  id: ""
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MEDIA_QUERY:
      var result = {
        ...state,
        query : action.query
      };
      return result;
    case types.MEDIA_GET_LIST:
      var result = {
        ...state,
        list : action.list
      };
      return result;
    case types.MEDIA_GET_BY_ID:
      return {
        ...state,
        id: action.id
      };
    default:
      return state;
  }
};

export default searchReducer;
