import React, { useState } from 'react';
import { Routes, Route, useLocation, Link, BrowserRouter } from 'react-router-dom';
import Sigin from './sigin';
import Register from './register';
import './style.scss';
const Navbar_sigin = () => {
  const location = useLocation();

  return (
    <div>
      <div className="navbar-dangky">This is Navbar</div>
      <div>
        <Link to="/dangnhap/?sigin">Đăng ký</Link>
        <Link to="/dangnhap/?register">Đăng Nhập </Link>

        {location.search === '?sigin' && <Register></Register>}
        {location.search === '?register' && <Sigin></Sigin>}
      </div>
    </div>
  );
};

export default Navbar_sigin;
