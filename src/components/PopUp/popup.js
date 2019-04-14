import React, { Component } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";
import { TYPE_ITEMS } from "../../constant";

const PopUp = ({ handleClose, data, open, handleSubmitForm }) => {
    var videosDisplay = typeof data.videos === "object" && data.videos ? data.videos[0].href : "";
    return (
      <Modal open={open} onClose={handleClose} center>
        <div className="header-modal">
          <h1>Add to collection</h1>
        </div>
        <div className="form">
          <form onSubmit={handleSubmitForm}>
            <div className="form-group">
              <label htmlFor="title">Title</label>
              <input type="text" className="form-control" name="title" id="title-popup" value={data.title} />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea className="form-control" rows="10" cols="20">
                {
                  data.description
                }
              </textarea>
            </div>
            <div className="form-group">
              <label htmlFor="type">Type</label>
              <select name="type" className="form-control">
                {
                  TYPE_ITEMS.map((item, index) => {
                    if (item.key == data.mediaType) {
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
              <input type="text" required className="form-control" name="link-preview-image-url" id="link-preview-image-url-popup" value={data.linkAsset} />
            </div>
            <div className="form-group">
              <label htmlFor="link-file-url">Link file url <span className="required">*</span></label>
              <input type="text" required className="form-control" name="link-file-url" id="link-file-url-popup" value={videosDisplay} />
            </div>
            <button type="submit" className="btn btn-default">
              Add to collection
            </button>
          </form>
        </div>
      </Modal>
    );
};

PopUp.propTypes = {
  handleClose: PropTypes.func,
  data: PropTypes.object,
  open: PropTypes.bool,
  handleSubmitForm: PropTypes.func
};

export default PopUp;
