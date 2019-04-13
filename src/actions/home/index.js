import * as types from "./actionTypes";

const _getListCollection = item => ({
    type: types.GET_LIST_COLLECTION,
    listCollection: item
});

export const getListCollection = item => dispatch => {
    dispatch(_getListCollection(item));
};