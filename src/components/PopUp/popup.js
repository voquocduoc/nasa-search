import React, { Component } from "react";
import Modal from "react-responsive-modal";
import PropTypes from "prop-types";

const PopUp = ({ handleClose, data, open, handleSubmitForm }) => {
    return (
      <Modal open={open} onClose={handleClose} center>
        <div className="header-modal">
          <h1>Add to collection</h1>
        </div>
        <div className="form">
          <form>
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
          </form>
        </div>
        <button onClick={() => handleSubmitForm} className="btn btn-default">
          Submit
        </button>
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
