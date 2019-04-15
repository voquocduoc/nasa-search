import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import localStorage from "../services/localStorage";
import api from "../services/api";
import Loader from "../components/Loader";
import { getAssetVideo } from "../helper";

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
            linkVideo: result.linkVideo,
            error: false,
            loading: false
          });
        } else {
          getAssetVideo(id).then(response => {
            if (response.length) {
              this.setState({
                linkVideo: response[0].href,
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
                !this.state.error && this.state.linkVideo ? 
                  <video className="media-detail-media" controls src={encodeURI(this.state.linkVideo)}>
                    Sorry, your browser does not support embedded videos, 
                    but do not worry, you can <a href={encodeURI(this.state.linkVideo)}>download it</a>
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
