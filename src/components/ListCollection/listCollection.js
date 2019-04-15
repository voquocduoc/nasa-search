import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem";

const ListCollection = ({ listItems }) => {
  return ( 
    <div className="row list-result-search">
      {
        listItems.map((item, index) => {
          return <ListItem key={index} dataItem={item}/>;
        })
      }
    </div>);
};

ListCollection.propTypes = {
  listItems: PropTypes.object.isRequired
};

export default ListCollection;
