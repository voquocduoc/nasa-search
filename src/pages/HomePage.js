import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getListCollection, saveWishList, deleteItemCollection, updateItemCollection } from "../actions/home";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListCollection from "../components/ListCollection";
import PopUp from "../components/PopUp";
import serialize from "form-serialize";
class HomePage extends Component {
  static propTypes = {
    doGetListCollection: PropTypes.func,
    listCollection: PropTypes.array,
    doSaveWishList: PropTypes.func,
    listWishList: PropTypes.array,
    doDeleteItemCollection: PropTypes.func,
    doUpdateItemCollection: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      openPopup: false,
      mediaItem: null
    };
  }

  componentDidMount() {
    this.props.doGetListCollection();
  }

  handleAddToWishList = (item) => {
    this.props.doSaveWishList(item);
  }

  handleDeleteItem = (item) => {
    this.props.doDeleteItemCollection(item);
  }

  handleEditItem = (item) => {
    this.setState({
      mediaItem: item,
      openPopup: true
    });
  }

  handleClosePopup = () => {
    this.setState({
      openPopup: false
    });
  }

  handleSubmitEditCollection = (event) => {
    event.preventDefault();
    var mediaItem = this.state.mediaItem;
    var formData = serialize(event.target, {hash: true});
    mediaItem.title = formData.title;
    mediaItem.description = formData.description;
    mediaItem.linkAsset = formData.linkPreviewImageUrl;
    mediaItem.linkVideo = formData.linkFileUrl;
    mediaItem.mediaType = Number(formData.type);
    this.props.doUpdateItemCollection(mediaItem);
    this.handleClosePopup();
  }

  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>NASA Collection</h1>
            </div>
            <div className="col-md-4 right">
              <Link to="/nasa-search">
                <button className="btn pupple" type="button">
                  <span className="glyphicon-plus"> </span>
                  <span>Add new Item</span>
                </button>
              </Link>
            </div>
            <div className="list-data">
              <ListCollection 
                listItems={this.props.listCollection} 
                onClickAddToWishList={this.handleAddToWishList} 
                onClikDeleteItem={this.handleDeleteItem} 
                onClickEditItem={this.handleEditItem}
                listWishList={this.props.listWishList}
              />
            </div>
            <div className="render-popup">
              <PopUp 
                open={this.state.openPopup}
                handleClose={this.handleClosePopup} 
                data={this.state.mediaItem}
                handleSubmitForm={this.handleSubmitEditCollection}
                lablePopup="Edit"
                lableButton="Save"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listCollection: state.homeReducer.listCollection,
    listWishList: state.homeReducer.listWishList
  };
}

const mapDispatchToProps = {
  doGetListCollection: getListCollection,
  doSaveWishList: saveWishList,
  doDeleteItemCollection: deleteItemCollection,
  doUpdateItemCollection: updateItemCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
