import * as types from "./actionTypes";
import api from "../../services/api";
import localStorage from "../../services/localStorage";

export const queryMedia = item => dispatch => {
  var resultData = [];
  if (item) {
    api.search(item).then(response => {
      resultData = response && response.collection.items.length ? response.collection.items : [];
      dispatch(setMediaList(resultData));
    });
  }
};

const setMediaList = list => ({
  type: types.MEDIA_LIST,
  list: list
});

export const loadSpiner = value => dispatch => {
  dispatch(_loadSpiner(value));
};

const _loadSpiner = value => ({
  type: types.LOAD_SPINER,
  loadSpiner: value
});

export const saveSuccessCollection = value => dispatch => {
  dispatch(_saveSuccessCollection(value));
};

const _saveSuccessCollection = value => ({
  type: types.SAVE_SUCCESS_COLLECTION,
  saveSuccessCollection: value
});

export const viewMedia = item => dispatch => {
  var resultData = item;
  if (item) {
    dispatch(_loadSpiner(true));
    api.asset(item.nasaID).then(response => {
      if (response) {
        var items =  response.collection.items;
        resultData.videos = items;
        dispatch(_setMediaItem(resultData));
        dispatch(_loadSpiner(false));
        dispatch(_openPopup(true));
      }
    });
  }
};

const _setMediaItem = item => ({
  type: types.MEDIA_ITEM,
  mediaItem: item
});

export const openPopUp = value => dispatch => {
  dispatch(_openPopup(value));
};

const _openPopup = value => ({
  type: types.OPEN_POPUP,
  openPopup: value
});

export const saveCollection = item => dispatch => {
  dispatch(_loadSpiner(true));
  localStorage.saveCollection(item).then(result => {
    if (result == "success") {
      dispatch(_loadSpiner(false));
      dispatch(_saveSuccessCollection(true));
    }
  });
};

export const getListCollectionSaved = () => dispatch => {
  localStorage.getAllKeysCollection().then(result => {
    if (result) {
      dispatch(_setListCollectionSaved(JSON.parse(result)));
    }
  });
};

export const _setListCollectionSaved = list => ({
  type: types.LIST_COLLECTION_SAVED,
  listCollectionSaved: list
});