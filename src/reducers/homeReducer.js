import * as types from "../actions/home/actionTypes";

const initialState = {
  listCollection: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_COLLECTION:
      let valueListCollection = action.listCollection;
      var result = {
        ...state,
        listCollection : valueListCollection
      };
      return result;
    default:
      return state;
  }
};

export default homeReducer;
