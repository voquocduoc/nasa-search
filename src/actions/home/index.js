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