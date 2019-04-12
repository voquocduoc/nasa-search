import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div className="home home-body">
        <div className="home-content">
          HELLO
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
