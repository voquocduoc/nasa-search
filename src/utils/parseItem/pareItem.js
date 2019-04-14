import formateDate from "../formatDate";

const parseItem = (item) => {
    if (typeof item !== "object") {
        return;
    }
    var data = item.data[0];
    if (data) {
        var dateCreated = data.date_created;
        var description = data.description;
        var mediaType = data.media_type;
        var nasaID = data.nasa_id;
        var title = data.title;
        var center = data.center;
    }

    var links = item.links;
    if (links) {
        var linkAsset = links[0].href;
    }

    return {
        dataCreated: formateDate(dateCreated),
        description: description,
        mediaType: mediaType,
        nasaID: nasaID,
        linkAsset: linkAsset,
        title: title,
        center: center
    };
};

export default parseItem;