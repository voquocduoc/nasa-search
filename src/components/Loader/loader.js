import React from "react";
import { ClipLoader } from "react-spinners";
import PropTypes from "prop-types";

const Loader = ({ loading }) => {
    return(
      <div className="loading">
        <ClipLoader
                sizeUnit={"px"}
                size={150}
                color={"#123abc"}
                loading={loading}
            />
      </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool
};

export default Loader;
