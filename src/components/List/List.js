import React from "react";
import ListItem from "../ListItem";
import parseItem from "../../utils/parseItem";
import PropTypes from "prop-types";

const List = ({ listItems, onClickAddToCollection, listCollectionSaved }) => {
  return ( 
    <div className="row list-result-search">
      {
        listItems.map((item, index) => {
          return <ListItem 
                    key={index} 
                    dataItem={parseItem(item)} 
                    onClickAddToCollection={onClickAddToCollection}
                    listCollectionSaved={listCollectionSaved}
                  />;
        })
      }
    </div>);
};

List.propTypes = {
  listItems: PropTypes.object.isRequired,
  onClickAddToCollection: PropTypes.func,
  listCollectionSaved: PropTypes.array
};

export default List;
