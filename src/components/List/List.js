import React from "react";
import PropTypes from "prop-types";

const List = ({ children }) => {
  const galleryItems = children.map((child, index) => (
    <div className="list-item" key={index}>
      {child}
    </div>
  ));
  return <div className="list">{galleryItems}</div>;
};

List.propTypes = {
  children: PropTypes.node
};

export default List;
