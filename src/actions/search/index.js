import * as types from "./actionTypes";
import api from "../../services/api";

export const queryMedia = item => dispatch => {
  if (item) {
    api.search(item).then(response => {
      let listDataResponse = response && response.collection.items.length ? response.collection.items : [];
      dispatch(setMediaList(listDataResponse));
    });
  }
};

const setMediaList = list => ({
  type: types.MEDIA_GET_LIST,
  list: list
});

