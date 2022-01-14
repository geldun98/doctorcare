import React from 'react';
import './style.scss';
import Navbar from './navbar';
import { Routes, Route } from 'react-router-dom';
import SearchDoctor from './searchdoctor';
import HomePage from './components/home';
import UserUpdateInfo from './update-info/UserUpdateInfo';
const App = () => {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/datkham" element={<SearchDoctor></SearchDoctor>}></Route>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/trangchu" element={<HomePage></HomePage>}></Route>
        <Route path="/capnhatthongtin" element={<UserUpdateInfo></UserUpdateInfo>}></Route>
      </Routes>
    </div>
  );
};

export default App;
