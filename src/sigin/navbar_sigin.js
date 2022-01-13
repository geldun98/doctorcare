import React, { useState } from 'react';
import { Routes, Route, useLocation, Link, BrowserRouter } from 'react-router-dom';
import Sigin from './sigin';
import Register from './register';
import './style.scss';
const Navbar_sigin = () => {
  const location = useLocation();
  return (
    <div>
      <div>
        <Link to="/dangnhap/?sigin">Đăng nhập </Link>
        <Link to="/dangnhap/?register">Đăng ký </Link>

        {location.search === '?sigin' && <Sigin/>}
        {location.search === '?register' && <Register/>}
      </div>
    </div>
  );
};

export default Navbar_sigin;
