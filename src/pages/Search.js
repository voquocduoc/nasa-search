import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { queryMedia, viewMedia, loadSpiner, openPopUp, saveCollection, saveSuccessCollection} from "../actions/search";
import SearchBox from "../components/SearchBox";
import List from "../components/List";
import Loader from "../components/Loader";
import PopUp from "../components/PopUp";
import serialize from "form-serialize";

class Search extends Component {
  static propTypes = {
    doQueryMedia: PropTypes.func,
    doViewMedia: PropTypes.func,
    listData: PropTypes.array,
    openPopup: PropTypes.bool,
    isLoadSpiner: PropTypes.bool,
    mediaItem: PropTypes.object,
    doLoadSpiner: PropTypes.func,
    doOpenPopup: PropTypes.func,
    doSaveCollection: PropTypes.func,
    doSaveSuccessCollection: PropTypes.func,
    isSaveSuccessCollection: PropTypes.bool
  }

  constructor(props) {
    super(props);
  }

  handleOnchangeValueSearch = (value) => {
    if (value) {
      this.props.doQueryMedia(value);
    }
  }

  handleOnClickAddToCollection = (dataItem) => {
    this.props.doViewMedia(dataItem);
  }

  handleClosePopup = () => {
    this.props.doOpenPopup(false);
  }

  handleSubmitAddCollection = (event) => {
    event.preventDefault();
    var mediaItem = this.props.mediaItem;
    var formData = serialize(event.target, {hash: true});
    mediaItem.title = formData.title;
    mediaItem.description = formData.description;
    mediaItem.linkAsset = formData.linkPreviewImageUrl;
    mediaItem.linkVideo = formData.linkFileUrl;
    mediaItem.mediaType = Number(formData.type);
    this.props.doSaveCollection(mediaItem);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.listData.length && nextProps.listData.length !== this.props.listData.length
    || nextProps.isLoadSpiner !== this.props.isLoadSpiner
    || nextProps.openPopup !== this.props.openPopup
    || nextProps.isSaveSuccessCollection
    || (nextProps.mediaItem && this.props.mediaItem && nextProps.mediaItem.nasaID !== this.props.mediaItem.nasaID);
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.isSaveSuccessCollection) {
      this.props.doSaveSuccessCollection(false);
      // eslint-disable-next-line react/prop-types
      this.props.history.goBack();
    }
  }

  render() {
    const { listData } = this.props;
    return (
      <div className="search">
        <div className="container">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-header">
                <Link to="/">
                  <div className="btn pull-left back">
                    <span className="glyphicon glyphicon-menu-left"></span>
                    <span>Back to Collection</span>
                  </div>
                </Link>
              </div>
            </div>
          </nav>
          <div className="page-header">
            <h1>Search From Nasa</h1>
          </div>
          <div className="search">
            <SearchBox onChangeValue={this.handleOnchangeValueSearch}/>
          </div>
          <div className="list-data">
            <List listItems={listData} onClickAddToCollection={this.handleOnClickAddToCollection}/>
          </div>
          <div className="render-popup">
            <PopUp 
              open={this.props.openPopup}
              handleClose={this.handleClosePopup} 
              data={this.props.mediaItem}
              handleSubmitForm={this.handleSubmitAddCollection}
            />
          </div>
          <div className="search-loading">
            <Loader loading={this.props.isLoadSpiner}/>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listData: state.searchReducer.list,
    isLoadSpiner: state.searchReducer.loadSpiner,
    openPopup: state.searchReducer.openPopup,
    mediaItem: state.searchReducer.mediaItem,
    isSaveSuccessCollection: state.searchReducer.saveSuccessCollection
  };
}

const mapDispatchToProps = {
  doQueryMedia: queryMedia,
  doViewMedia: viewMedia,
  doLoadSpiner: loadSpiner,
  doOpenPopup: openPopUp,
  doSaveCollection: saveCollection,
  doSaveSuccessCollection: saveSuccessCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
