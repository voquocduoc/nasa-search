const localStorage = {
  saveCollection: item => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys");
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values");
      if (nasaCollectionKeys) {
        var nasaCollectionKeysParse = JSON.parse(nasaCollectionKeys);
        nasaCollectionKeysParse.push(item.nasaID);
        nasaCollectionKeys = nasaCollectionKeysParse;
        var nasaCollectionValuesParse = JSON.parse(nasaCollectionValues);
        nasaCollectionValuesParse.push(item);
        nasaCollectionValues = nasaCollectionValuesParse;
      } else {
        nasaCollectionKeys = new Array();
        nasaCollectionValues = new Array();
        nasaCollectionKeys.push(item.nasaID);
        nasaCollectionValues.push(item);
      }
      window.localStorage.setItem("nasa-collection-keys", JSON.stringify(nasaCollectionKeys));
      window.localStorage.setItem("nasa-collection-values", JSON.stringify(nasaCollectionValues));
      resolve("success");
    });
  },
  getAllCollection: () => {
    return new Promise((resolve) => {
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values") ? window.localStorage.getItem("nasa-collection-values") : [];
      resolve(nasaCollectionValues);
    });
  },
  getAllKeysCollection: () => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys") ? window.localStorage.getItem("nasa-collection-keys") : [];
      resolve(nasaCollectionKeys);
    });
  },
  getCollection: (id) => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys");
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values");
      if (nasaCollectionKeys) {
        nasaCollectionKeys = JSON.parse(nasaCollectionKeys);
        nasaCollectionValues = JSON.parse(nasaCollectionValues);
        var indexItemInCollection = nasaCollectionKeys.indexOf(id);
        if (indexItemInCollection > -1 ) {
          resolve(nasaCollectionValues[indexItemInCollection]);
        } else {
          resolve("error");
        }
      }
    });
  },
  saveWishList: item => {
    return new Promise((resolve) => {
      var listWishList = window.localStorage.getItem("nasa-collection-wishlist");
      if (listWishList) {
        listWishList = JSON.parse(listWishList);
        var indexOfItemInWishList = listWishList.indexOf(item.nasaID);
        if (indexOfItemInWishList > -1 ) {
          listWishList.splice(listWishList.indexOf(indexOfItemInWishList), 1);
        } else {
          listWishList.push(item.nasaID);
        }
      } else {
        listWishList = new Array();
        listWishList.push(item.nasaID);
      }
      window.localStorage.setItem("nasa-collection-wishlist", JSON.stringify(listWishList));
      resolve("success");
    });
  },
  getAllWishList: () => {
    return new Promise((resolve) => {
      var listWishList = window.localStorage.getItem("nasa-collection-wishlist") ? window.localStorage.getItem("nasa-collection-wishlist") : [];
      resolve(listWishList);
    });
  },
  deleteItemCollection: item => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys");
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values");
      if (nasaCollectionKeys) {
        nasaCollectionKeys = JSON.parse(nasaCollectionKeys);
        nasaCollectionValues = JSON.parse(nasaCollectionValues);
        var indexOfItemDelete = nasaCollectionKeys.indexOf(item.nasaID);
        nasaCollectionKeys.splice(indexOfItemDelete, 1);
        nasaCollectionValues.splice(indexOfItemDelete, 1);
        window.localStorage.setItem("nasa-collection-keys", JSON.stringify(nasaCollectionKeys));
        window.localStorage.setItem("nasa-collection-values", JSON.stringify(nasaCollectionValues));
      } else {
        window.localStorage.removeItem("nasa-collection-keys");
        window.localStorage.removeItem("nasa-collection-values");
      }

      // remove wishlist
      var listWishList = window.localStorage.getItem("nasa-collection-wishlist");
      if (listWishList) {
        var listArrayWishlist = JSON.parse(listWishList);
        var indexOfItemInWishList = listArrayWishlist.indexOf(item.nasaID);
        if (indexOfItemInWishList > -1) {
          listArrayWishlist.splice(indexOfItemInWishList, 1);
          window.localStorage.setItem("nasa-collection-wishlist", JSON.stringify(listArrayWishlist));
        }
      } else {
        window.localStorage.removeItem("nasa-collection-wishlist");
      }
      resolve("success");
    });
  },
  updateItemCollection: (item) => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys");
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values");
      if (nasaCollectionKeys) {
        var nasaCollectionKeysParse = JSON.parse(nasaCollectionKeys);
        var nasaCollectionValuesParse = JSON.parse(nasaCollectionValues);
        var indexOfItemInCollectionKeys = nasaCollectionKeysParse.indexOf(item.nasaID);
        if (indexOfItemInCollectionKeys) {
          nasaCollectionValuesParse[indexOfItemInCollectionKeys] = item;
          nasaCollectionValues = nasaCollectionValuesParse;
        }
      }
      window.localStorage.setItem("nasa-collection-values", JSON.stringify(nasaCollectionValues));
      resolve("success");
    });
  }
};

export default localStorage;
