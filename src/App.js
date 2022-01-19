import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CheckLogin from './checklogin/CheckLogin';
import HomePage from './components/home';
import Footer from './footer/Footer';
import Navbar from './navbar';
import DoctorDetail from './pickdoctor/doctor-infor';
import Question from './question';
import SearchDoctor from './searchdoctor';
import Share from './share';
import SiginRegister from './sigin/sigin_register';
import './style.scss';
import UpdateInfo from './update-info/UpdateInfo';

const App = () => {
  return (
    <div className="App">
      <CheckLogin></CheckLogin>
      <Navbar></Navbar>

      <Routes>
        <Route path="/pickdoctor" element={<DoctorDetail></DoctorDetail>}></Route>
        <Route path="/datkham" element={<SearchDoctor></SearchDoctor>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/trangchu" element={<HomePage></HomePage>}></Route>
        <Route path="/hoidap/*" element={<Question></Question>}></Route>
        <Route path="/capnhatthongtin" element={<UpdateInfo></UpdateInfo>}></Route>
        <Route path="/dangnhap/*" element={<SiginRegister />}></Route>
        <Route path="/camnang/*" element={<Share></Share>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
};

export default App;
