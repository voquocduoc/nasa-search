import React, { Component } from "react";
import { connect } from "react-redux";

class HomePage extends Component {
  render() {
    return (
      <div className="">
        Home
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(HomePage);
