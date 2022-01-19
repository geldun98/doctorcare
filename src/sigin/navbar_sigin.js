/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Routes, Route, useLocation, Link, BrowserRouter } from 'react-router-dom';
import Sigin from './sigin';
import Register from './register';
import './components/index.scss';
const Navbar_sigin = () => {
  const location = useLocation();
  return (
    <div className="form">
      <div className="navbar_login_logout">
        <Link to="sigin">Đăng nhập </Link>
        <Link to="register">Đăng ký </Link>
      </div>

      <Routes>
        <Route path="sigin" element={<Sigin></Sigin>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};

export default Navbar_sigin;
