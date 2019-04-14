import React from "react";
import PropTypes from "prop-types";
const Footer = ({ children }) => {
  return (
    <header className="footer">
      <div className="footer-wrapper">
        <div className="footer-content">{children}</div>
      </div>
    </header>
  );
};

Footer.propTypes = {
  children: PropTypes.node
};

export default Footer;
