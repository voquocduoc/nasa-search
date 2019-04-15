import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-8">
              <h1>NASA Collection</h1>
            </div>
            <div className="col-md-4">
              <Link to="/nasa-search">
                <button className="btn btn-default add-new" type="button">
                  <span className="glyphicon-plus"> </span>
                  <span>Add new Item</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
