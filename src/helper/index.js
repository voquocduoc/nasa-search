import localStorage from "../services/localStorage";
import api from "../services/api";
import { REGEX_TYPE_IMAGE } from "../constant";

export const getAllCollection = () => {
    return new Promise((resolve) => {
        localStorage.getAllCollection().then(result => {
            if (result) {
                var list = JSON.parse(result);
                resolve(list);
            }
        });
    });
};

export const getAllWishList = () => {
    return new Promise((resolve) => {
        localStorage.getAllWishList().then(resultWishList => {
            resolve(resultWishList);
        });
    });
};

export const getAssetVideo = (id) => {
    return new Promise((resolve) => {
        api.asset(id).then(response => {
            if (response) {
              var items =  response.collection.items;
              var result = new Array();
              if (items.length) {
                for (let i = 0; i < items.length; i++) {
                    var checkRegexImage  = REGEX_TYPE_IMAGE;
                    var hrefItem = encodeURI(items[i].href);
                    if (!checkRegexImage.test(hrefItem)) {
                        result.push(items[i]);
                        break;
                    }
                }
              }
              resolve(result);
            }
          });
    });
};

export default {
    getAllWishList,
    getAllCollection
};

