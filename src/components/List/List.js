import React from "react";
import ListItem from "../ListItem";
import parseItem from "../../utils/parseItem";

// eslint-disable-next-line react/prop-types
const List = ({ listItems }) => {
  return ( 
    <div className="row list">
      {
        listItems.map((item, index) => {
          return <ListItem key={index} dataItem={parseItem(item)} />;
        })
      }
    </div>);
};

export default List;
