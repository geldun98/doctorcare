/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useLocation, Link, BrowserRouter } from 'react-router-dom';
import Sigin from './sigin';
import Register from './register';
import './components/index.css';
const Navbar_sigin = () => {
  const location = useLocation();
  return (
    <div className='login'>
      <div className='login1'>
        <div className='link' >
        <Link to="/dangnhap/?sigin">Đăng nhập </Link>
        <Link to="/dangnhap/?register">Đăng ký </Link>
      </div>
        {location.search === '?sigin' && <Sigin/>}
        {location.search === '?register' && <Register/>}
      </div>
    </div>
  );
};

export default Navbar_sigin;
