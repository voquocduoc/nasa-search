import React, { PureComponent } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { TYPE_ITEMS } from "../../constant";
class PopUp extends PureComponent {
  static propTypes = {
    handleClose: PropTypes.func,
    data: PropTypes.object,
    open: PropTypes.bool,
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
  }

  UNSAFE_componentWillUpdate(nextProps) {
    if (nextProps.data && Object.values(nextProps.data) && Object.values(nextProps.data).length) {
      this.setState({
        title: nextProps.data.title,
        description: nextProps.data.description,
        linkAsset: nextProps.data.linkAsset,
        videosDisplay: nextProps.data.videos[0].href
      });
    }
  }

  render() {
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
          <h1>Add to collection</h1>
        </div>
        <div className="form">
          <form onSubmit={this.props.handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" name="title" id="title-popup" value={this.state.title} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" name="description" rows="10" cols="20">
                {
                  this.state.description
                }
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select name="type" className="form-control">
                {
                  TYPE_ITEMS.map((item, index) => {
                    if (item.key == this.props.data.mediaType) {
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
              <input type="text" required className="form-control" name="linkPreviewImageUrl" id="link-preview-image-url-popup" value={this.state.linkAsset} />
            </div>
            <div className="form-group">
              <label htmlFor="link-file-url">Link file url <span className="required">*</span></label>
              <input type="text" required className="form-control" name="linkFileUrl" id="link-file-url-popup" value={this.state.videosDisplay} />
            </div>
            <button type="submit" className="btn pupple small">
              Add to collection
            </button>
          </form>
        </div>
      </Modal>
    );
  }
}

export default PopUp;
