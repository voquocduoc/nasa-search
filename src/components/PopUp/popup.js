import React, { Component } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { TYPE_ITEMS } from "../../constant";
import hash from "object-hash";
class PopUp extends Component {
  static propTypes = {
    handleClose: PropTypes.func,
    data: PropTypes.object,
    open: PropTypes.bool,
    lablePopup: PropTypes.string,
    lableButton: PropTypes.string,
    handleSubmitForm: PropTypes.func
  }

  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      linkAsset: "",
      videosDisplay: ""
    };
    this.form = React.createRef();
    this.validate = this.validate.bind(this);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return hash.MD5(nextProps.data) !== hash.MD5(this.props.data)
    || nextProps.open !== this.props.open
    || nextState.title !== this.state.title
    || nextState.description !== this.state.description
    || nextState.linkAsset !== this.state.linkAsset
    || nextState.videosDisplay !== this.state.videosDisplay;
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.data && Object.values(nextProps.data) && Object.values(nextProps.data).length && hash.MD5(nextProps.data) !== hash.MD5(this.props.data)) {
      this.setState({
        title: nextProps.data.title,
        description: nextProps.data.description,
        linkAsset: nextProps.data.linkAsset,
        videosDisplay: nextProps.data.videos[0].href
      });
    }
  }

  handleOnChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  }

  handleOnChangeDescription = (event) => {
    this.setState({
      description: event.target.value
    });
  }

  handleOnChangeLinkAsset = (event) => {
    this.setState({
      linkAsset: event.target.value
    });
  }

  handleOnChangeLinkVideo = (event) => {
    this.setState({
      videosDisplay: event.target.value
    });
  }

  validate = () => {
    return this.form.current.reportValidity();
  }

  handleSubmitPopupForm = (event) => {
    var validateForm = this.validate();
    if (validateForm) {
      this.props.handleSubmitForm(event);
    }
  }
  render() {
    const { lablePopup, lableButton } = this.props;
    const mediaType = this.props.data && this.props.data.mediaType ? this.props.data.mediaType : 1;
    return (
      <Modal 
        open={this.props.open}
        onClose={this.props.handleClose}
        center
        classNames={{
          overlay: "search-modal-overlay",
          modal: "search-modal",
        }}>
        <div className="header-modal">
          <h1>{lablePopup}</h1>
        </div>
        <div className="form">
          <form ref={this.form} onSubmit={this.handleSubmitPopupForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text"  onChange={this.handleOnChangeTitle} className="form-control" name="title" id="title-popup" value={this.state.title} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" onChange={this.handleOnChangeDescription}  name="description" rows="10" value={this.state.description}>
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select name="type" className="form-control">
                {
                  TYPE_ITEMS.map((item, index) => {
                    if (item.key == mediaType) {
                      return <option key={index} selected value={item.key}>{item.value}</option>;
                    } else {
                      return <option key={index} value={item.key}>{item.value}</option>;
                    }
                  })
                }
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="link-preview-image-url">Link preview image url <span className="required">*</span></label>
              <input type="text" required="required" onChange={this.handleOnChangeLinkAsset} className="form-control" name="linkPreviewImageUrl" id="link-preview-image-url-popup" value={this.state.linkAsset} />
            </div>
            <div className="form-group">
              <label htmlFor="link-file-url">Link file url <span className="required">*</span></label>
              <input type="text" required="required" onChange={this.handleOnChangeLinkVideo} className="form-control" name="linkFileUrl" id="link-file-url-popup" value={this.state.videosDisplay} />
            </div>
            <button type="submit" className="btn pupple small">
              {lableButton}
            </button>
          </form>
        </div>
      </Modal>
    );
  }
}

export default PopUp;
