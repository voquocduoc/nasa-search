import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { queryMedia } from "../actions/search";
import SearchBox from "../components/SearchBox";
import List from "../components/List";
import ListItem from "../components/ListItem";

class Search extends Component {
  static propTypes = {
    doQueryMedia: PropTypes.func,
    listData: PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  handleOnchangeValueSearch = (value) => {
    if (value) {
      this.props.doQueryMedia(value);
    }
  }

  shouldComponentUpdate(nextProps) {
    console.log(nextProps, nextProps.listData.length && nextProps.listData.length !== this.props.listData.length);
    return nextProps.listData.length && nextProps.listData.length !== this.props.listData.length;
  }
  
  renderListItem = (listData) => {
    if (listData && listData.length) {
      listData.map( (item, index) => {
        let data = item.data && item.data.length ? item.data : null;
        console.log(item);
        // return (
        //   <ListItem image={ image } id={ nasaId } key={ nasaId } title={ title } />
        // );
      });
    }
  }

  render() {
    const { listData } = this.props;

    return (
      <div className="search">
        <div className="container">
          <div className="row navigation">
            <Link to="/">
              <div className="btn btn-default pull-left">
                <span className="glyphicon glyphicon-menu-left">Back to Collection</span>
              </div>
            </Link>
          </div>
          <div className="title">
            <h1>Search From Nasa</h1>
          </div>
          <div className="search">
            <SearchBox onChangeValue={this.handleOnchangeValueSearch}/>
          </div>
          <div className="list-data">
            {
              this.renderListItem(listData)
            }
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    listData: state.searchReducer.list
  };
}

const mapDispatchToProps = {
  doQueryMedia: queryMedia
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
