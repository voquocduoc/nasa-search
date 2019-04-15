import React from "react";
import PropTypes from "prop-types";
import ListItem from "../ListItem";

const ListCollection = ({ listItems, onClickAddToWishList, onClikDeleteItem, onClickEditItem }) => {
  return ( 
    <div className="row list-result-search">
      {
        listItems.map((item, index) => {
          return <ListItem 
                    key={index} 
                    dataItem={item} 
                    onClickAddToWishList={onClickAddToWishList}
                    onClikDeleteItem={onClikDeleteItem}
                    onClickEditItem={onClickEditItem}
                  />;
        })
      }
    </div>);
};

ListCollection.propTypes = {
  listItems: PropTypes.object.isRequired,
  onClickAddToWishList: PropTypes.func,
  onClikDeleteItem: PropTypes.func,
  onClickEditItem: PropTypes.func
};

export default ListCollection;
