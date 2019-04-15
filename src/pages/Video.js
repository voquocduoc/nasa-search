import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import localStorage from "../services/localStorage";
import api from "../services/api";
import Loader from "../components/Loader";

class Video extends Component {
  static propTypes = {
    match: PropTypes.object
  }

  constructor(props) {
    super(props);
    this.state = {
      error: false,
      dataItem: null,
      loading: true
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    if (id) {
      localStorage.getCollection(id).then(result => {
        if (result !== "error") {
          this.setState({
            dataItem: result,
            error: false,
            loading: false
          });
        } else {
          api.asset(id).then(response => {
            if (response.collection && response.collection.items && response.collection.items.length) {
              var items =  response.collection.items;
              this.setState({
                dataItem: items[0],
                error: false,
                loading: false
              });
            } else {
              this.setState({
                error: true,
                loading: false
              });
            }
          });
        }
      });
    }
  }

  render() {
    return (
      <div className="video">
        <div className="container">
          <div className="row video-container">
            {
              this.state.loading ?
                <Loader loading={this.state.loading}/>
              : (
                !this.state.error && this.state.dataItem ? 
                  <video className="media-detail-media" controls src={this.state.dataItem.linkVideo}>
                    Sorry, your browser does not support embedded videos, 
                    but do not worry, you can <a href={this.state.dataItem.linkVideo}>download it</a>
                    and watch it with your favorite video player!
                  </video>:
                  <div className="alert alert-danger" role="alert">
                    <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                    <span className="sr-only">Error:</span>
                    CAN NOT GET VIDEO
                  </div>
              )
            }
          </div>
        </div>
      </div>
    );
  }
}

export default Video;
