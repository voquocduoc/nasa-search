import * as types from "./actionTypes";
import localStorage from "../../services/localStorage";
import { getAllCollection, getAllWishList } from "../../helper";

const _getListCollection = item => ({
    type: types.LIST_COLLECTION,
    listCollection: item
});

export const getListCollection = () => dispatch => {
    getAllCollection().then(result => {
        if (result) {
            dispatch(_getListCollection(result));
        }
    });

    getAllWishList().then(resultWishList => {
        dispatch(_getWishList(resultWishList));
    });
};

export const saveWishList = (item) => dispatch => {
    localStorage.saveWishList(item).then(result => {
        if (result == "success") {
            getAllWishList().then(resultWishList => {
                dispatch(_getWishList(resultWishList));
            });
        }
    });
};

export const _getWishList = list => ({
    type: types.LIST_WISHLIST,
    listWishList: list
});

export const deleteItemCollection = (item) => dispatch => {
    localStorage.deleteItemCollection(item).then(result => {
        if (result == "success") {
            getAllCollection().then(result => {
                if (result) {
                    dispatch(_getListCollection(result));
                }
            });
        }
    });
};

export const updateItemCollection = (item) => dispatch => {
    localStorage.updateItemCollection(item).then(result => {
        if (result == "success") {
            getAllCollection().then(result => {
                if (result) {
                    dispatch(_getListCollection(result));
                }
            });
        }
    });
};