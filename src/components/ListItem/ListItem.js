import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import LazyLoad from "react-lazyload";

// eslint-disable-next-line react/prop-types
const ListItem = ({ image, id, title }) => (
  <article className="item">
    <Link className="list-item-wrapper" to={`/video/${id}`} title={title}>
      <div className="list-item-image-wrapper">
        <LazyLoad height={200} once>
          <img
            src={image}
            alt={title}
            title={title}
            className="list-item-image"
          />
        </LazyLoad>
      </div>
      {title && <p className="list-item-title">{title}</p>}
    </Link>
  </article>
);

ListItem.propType = {
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default ListItem;
