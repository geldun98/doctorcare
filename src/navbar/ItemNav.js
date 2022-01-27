import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemNav = ({ url, children }) => {
  console.log(url);
  return (
    <div className="Navbar-Item">
      <NavLink
        to={url}
        className={(navData) => {
          if (navData.isActive === true) return 'active';
          else return '';
        }}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ItemNav;
