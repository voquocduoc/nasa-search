import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

// eslint-disable-next-line react/prop-types
const ListItem = ({ dataItem }) => {
  return (
    <article className="item">
      <Link className="list-item-wrapper" to={`/video/${dataItem.nasaID}`} title={dataItem.title}>
        <div className="col-sm-6 col-md-4 list-item-image-wrapper">
          <div className="thumbnail">
            <LazyLoad height={200} once>
              <img
                src={dataItem.linkAsset}
                alt={dataItem.title}
                title={dataItem.title}
                className="list-item-image"
              />
              <div className="caption">
                <div className="time-category">
                  <span className="category pull-left">
                    Space
                  </span>
                  <span className="time pull-right">
                    {
                      dataItem.dataCreated
                    }
                  </span>
                </div>
                <div className="title">
                  {dataItem.title}
                </div>
                <div className="description" dangerouslySetInnerHTML={{__html: dataItem.description}} />
              </div>
            </LazyLoad>
          </div>
        </div>
        
      </Link>
    </article>
  );
};

ListItem.propType = {
  dataItem: PropTypes.node
};

export default ListItem;
