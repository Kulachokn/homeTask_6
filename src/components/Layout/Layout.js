import React from 'react';
import './Layout.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => <div className="Layout">{children}</div>;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
