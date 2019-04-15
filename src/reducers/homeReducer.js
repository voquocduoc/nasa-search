import * as types from "../actions/home/actionTypes";

const initialState = {
  listCollection: [],
  listWishList: []
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LIST_COLLECTION:
      var result = {
        ...state,
        listCollection : action.listCollection
      };
      return result;
    case types.LIST_WISHLIST:
      var result = {
        ...state,
        listWishList : action.listWishList
      };
      return result;
    default:
      return state;
  }
};

export default homeReducer;
