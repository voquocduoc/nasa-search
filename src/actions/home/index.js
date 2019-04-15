import * as types from "./actionTypes";
import localStorage from "../../services/localStorage";

const _getListCollection = item => ({
    type: types.LIST_COLLECTION,
    listCollection: item
});

export const getListCollection = () => dispatch => {
    localStorage.getAllCollection().then(result => {
        if (result) {
            var list = JSON.parse(result);
            dispatch(_getListCollection(list));
        }
    });
};

export const saveWishList = (item) => dispatch => {
    localStorage.saveWishList(item).then(result => {
        if (result == "success") {
           localStorage.getAllWishList().then(resultWishList => {
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
            localStorage.getAllCollection().then(result => {
                if (result) {
                    var list = JSON.parse(result);
                    dispatch(_getListCollection(list));
                }
            });
        }
    });
};

export const updateItemCollection = (item) => dispatch => {
    localStorage.updateItemCollection(item).then(result => {
        if (result == "success") {
            localStorage.getAllCollection().then(result => {
                if (result) {
                    var list = JSON.parse(result);
                    dispatch(_getListCollection(list));
                }
            });
        }
    });
};