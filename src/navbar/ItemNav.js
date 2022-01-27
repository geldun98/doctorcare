import React from 'react';
import { NavLink } from 'react-router-dom';

const ItemNav = ({ url, children }) => {
  function handleItem(e) {
    e.target.parentElement.parentElement.classList.remove('show');
  }
  return (
    <div className="Navbar-Item">
      <NavLink
        to={url}
        className={(navData) => {
          if (navData.isActive === true) return 'active';
          else return '';
        }}
        onClick={handleItem}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default ItemNav;
