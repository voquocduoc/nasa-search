const localStorage = {
  saveCollection: item => {
    return new Promise((resolve, reject) => {
      var nasaCollection = window.localStorage.getItem("nasa-collection");
      if (nasaCollection) {
        var nasaCollectionParse = JSON.parse(nasaCollection);
        nasaCollectionParse.push(item);
        nasaCollection = nasaCollectionParse;
      } else {
        nasaCollection = new Array();
        nasaCollection.push(item);
      }
      window.localStorage.setItem("nasa-collection", JSON.stringify(nasaCollection));
      resolve("success");
    });
  },
  getAllCollection: () => {
    return new Promise((resolve, reject) => {
      var nasaCollection = window.localStorage.getItem("nasa-collection");
      resolve(nasaCollection);
    });
  }
};

export default localStorage;
