import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ListItem = ({ dataItem, onClickAddToCollection }) => {
  return (
    <article className="item">
      <div className="col-sm-6 col-md-4 list-item-image-wrapper">
        <div className="thumbnail">
          <Link className="list-item-wrapper" to={`/video/${dataItem.nasaID}`} title={dataItem.title}>
            <LazyLoad height={200} once>
              <img
                src={dataItem.linkAsset}
                alt={dataItem.title}
                title={dataItem.title}
                className="list-item-image"
              />
            </LazyLoad>
          </Link>
          <div className="caption">
            <div className="time-category">
              <span className="category pull-left">
                {dataItem.center}
              </span>
              <span className="time pull-right">
                {
                  dataItem.dataCreated
                }
              </span>
            </div>
            <div className="title">
              <h3>{dataItem.title}</h3>
            </div>
            <div className="description" dangerouslySetInnerHTML={{__html: dataItem.description}} />
            <button onClick={() => onClickAddToCollection(dataItem)} className="btn btn-primary" role="button">
              <span className="glyphicon glyphicon-plus">Add to NASA Collection</span>
            </button>
          </div>
        </div>
      </div>
    </article>
  );
};

ListItem.propTypes = {
  dataItem: PropTypes.object.isRequired,
  onClickAddToCollection: PropTypes.func
};

export default ListItem;
