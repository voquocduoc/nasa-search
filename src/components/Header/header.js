import React from "react";
import PropTypes from "prop-types";
const Header = ({ children }) => {
  return (
    <header className="header">
      <div className="header-wrapper">
        <div className="header-content">{children}</div>
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node
};

export default Header;
