import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

const ListItem = ({ dataItem, onClickAddToCollection, onClickEditItem, onClickAddToWishList, onClikDeleteItem }) => {
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
            {
              typeof onClickAddToCollection === "function" &&
              <button onClick={() => onClickAddToCollection(dataItem)} className="btn btn-default" role="button">
                <span className="glyphicon-plus"></span>
                <span>Add to NASA Collection</span>
              </button>
            }
            <div className="btn-group">

              {
                typeof onClickAddToWishList === "function" &&
                <button onClick={() => onClickAddToWishList(dataItem)} className="btn btn-primary" role="button">
                  <span className="glyphicon glyphicon-heart"></span>
                </button>
              }

              {
                typeof onClikDeleteItem === "function" &&
                <button onClick={() => onClikDeleteItem(dataItem)} className="btn btn-primary" role="button">
                  <span className="glyphicon glyphicon-trash"></span>
                </button>
              }

              {
                typeof onClickEditItem === "function" &&
                <button onClick={() => onClickEditItem(dataItem)} className="btn btn-primary" role="button">
                  <span className="glyphicon glyphicon-pencil"></span>
                </button>
              } 
            </div>          
          </div>
        </div>
      </div>
    </article>
  );
};

ListItem.propTypes = {
  dataItem: PropTypes.object.isRequired,
  onClickAddToCollection: PropTypes.func,
  onClickEditItem: PropTypes.func,
  onClickAddToWishList: PropTypes.func,
  onClikDeleteItem: PropTypes.func,
};

export default ListItem;
