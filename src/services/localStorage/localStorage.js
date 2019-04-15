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
      var nasaCollectionValues = window.localStorage.getItem("nasa-collection-values");
      resolve(nasaCollectionValues);
    });
  },
  getAllKeysCollection: () => {
    return new Promise((resolve) => {
      var nasaCollectionKeys = window.localStorage.getItem("nasa-collection-keys") ? window.localStorage.getItem("nasa-collection-keys") : [];
      resolve(nasaCollectionKeys);
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
        var nasaCollectionKeysParse = JSON.parse(nasaCollectionKeys);
        var nasaCollectionValuesParse = JSON.parse(nasaCollectionValues);
        var indexOfItemDelete = nasaCollectionKeysParse.indexOf(item.nasaID);
        nasaCollectionKeysParse.splice(indexOfItemDelete, 1);
        nasaCollectionValuesParse.splice(indexOfItemDelete, 1);
        nasaCollectionKeys = nasaCollectionKeysParse;
        nasaCollectionValues = nasaCollectionValuesParse;
      }
      window.localStorage.setItem("nasa-collection-keys", JSON.stringify(nasaCollectionKeys));
      window.localStorage.setItem("nasa-collection-values", JSON.stringify(nasaCollectionValues));

      // remove wishlist
      var listWishList = window.localStorage.getItem("nasa-collection-wishlist");
      if (listWishList) {
        var listArrayWishlist = JSON.parse(listWishList);
        var indexOfItemInWishList = listArrayWishlist.indexOf(item.nasaID);
        if (indexOfItemInWishList > -1) {
          listArrayWishlist.splice(indexOfItemInWishList, 1);
          window.localStorage.setItem("nasa-collection-wishlist", JSON.stringify(listArrayWishlist));
        }
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
