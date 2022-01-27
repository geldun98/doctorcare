/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Link,
  BrowserRouter,
} from "react-router-dom";
import Sigin from "./sigin";
import Register from "./register";
import "./components/index.scss";
const Navbar_sigin = () => {
  let siginclass = "mavnar_login_logout_link_a"
  let registerclass = "mavnar_login_logout_link_a"
  //hiện thị thay đổi khi ở đăng nhập hoặc đăng suấtuseLocation().pathname
  function usePageViews() {
    if(/sigin/.test(useLocation().pathname)) {
      siginclass = "mavnar_login_logout_link_a_focus"
    }
    if(/register/.test(useLocation().pathname)) { 
    registerclass = "mavnar_login_logout_link_a_focus"
    }
  } 
  usePageViews()
  return (
    <div className="form">
      <div className="navbar_login_logout">
        <div className="mavnar_login_logout_link">
          <Link to="sigin" className={siginclass}>Đăng nhập </Link>
        </div>
        <div className="mavnar_login_logout_link">
          <Link to="register" className={registerclass} >Đăng ký </Link>
        </div>
      </div>
      <Routes>
        <Route path="sigin" element={<Sigin></Sigin>} ></Route>
        <Route path="register" element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
};

export default Navbar_sigin;
