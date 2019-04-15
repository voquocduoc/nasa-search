import * as types from "../actions/search/actionTypes";

const initialState = {
  list: [],
  loadSpiner: false,
  openPopup: false,
  mediaItem: {},
  saveSuccessCollection: false
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.MEDIA_LIST:
      return {
        ...state,
        list : action.list
      };
    case types.SAVE_SUCCESS_COLLECTION:
      return {
        ...state,
        saveSuccessCollection : action.saveSuccessCollection
      };;
    case types.LOAD_SPINER:
      return {
        ...state,
        loadSpiner: action.loadSpiner
      };
    case types.MEDIA_ITEM:
      return {
        ...state,
        mediaItem: action.mediaItem
      };
    case types.OPEN_POPUP:
      return {
        ...state,
        openPopup: action.openPopup
      };
    default:
      return state;
  }
};

export default searchReducer;
