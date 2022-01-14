import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import Navbar from './navbar';
import SearchDoctor from './searchdoctor';
import './style.scss';
import UserUpdateInfo from './update-info/UserUpdateInfo';
import SiginRegister from './sigin/sigin_register';
import DoctorDetail from './pickdoctor/doctor-infor';

const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/pickdoctor" element={<DoctorDetail></DoctorDetail>}></Route>
        <Route path="/datkham" element={<SearchDoctor></SearchDoctor>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/trangchu" element={<HomePage></HomePage>}></Route>
        <Route path="/capnhatthongtin" element={<UserUpdateInfo></UserUpdateInfo>}></Route>
        <Route path="/dangnhap" element={<SiginRegister />}></Route>
      </Routes>
    </div>
  );
};

export default App;
