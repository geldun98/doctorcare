import React from 'react';
import { Link } from 'react-router-dom';

const ItemNav = ({ url, children }) => {
  return (
    <div className="Navbar-Item">
      <Link to={url}>{children}</Link>
    </div>
  );
};

export default ItemNav;
