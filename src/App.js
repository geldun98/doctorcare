import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './components/home';
import Navbar from './navbar';
import SearchDoctor from './searchdoctor';
import './style.scss';
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
