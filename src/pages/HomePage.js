import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getListCollection } from "../actions/home";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import ListCollection from "../components/ListCollection";

class HomePage extends Component {
  static propTypes = {
    doGetListCollection: PropTypes.func,
    listCollection: PropTypes.array
  }

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.doGetListCollection();
  }

  handleAddToWishList = (item) => {
    console.log("addto wish", item);
  }

  handleDeleteItem = (item) => {
    console.log("Delete Item", item);
  }

  handleEditItem = (item) => {
    console.log("EDIT Item", item);
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
    listCollection: state.homeReducer.listCollection
  };
}

const mapDispatchToProps = {
  doGetListCollection: getListCollection
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);
