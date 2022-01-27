import React, { useContext, useRef } from 'react';
import Context from '../store/Context';
import NavUser from './NavUser';
import { Link, useNavigate } from 'react-router-dom';
import './style.scss';
const User = () => {
  const [dataUser, setDataUser] = useContext(Context);
  const navigate = useNavigate();
  const menu = useRef();
  function handleLogout() {
    localStorage.removeItem('user');
    setDataUser({});
    navigate('/trangchu');
  }
  function handleHide(e) {
    e.target.parentElement.parentElement.parentElement.parentElement.parentElement.classList.remove('show');
  }
  function handleNav() {
    menu.current.classList.add('menu');
  }
  function handleClickMenu() {
    menu.current.classList.remove('menu');
  }

  return (
    <div className="User">
      <div className="User-Desktop">
        <div className="User-account" onMouseOver={handleNav}>
          {dataUser.username}
          {<i className="fas fa-user"></i>}
        </div>

        <div className="User-menu" ref={menu} onClick={handleClickMenu}>
          <NavUser handleLogout={handleLogout}></NavUser>
        </div>
      </div>
      <div className="User-Mobile" onClick={handleHide}>
        <div className="User-Mobile-Item">
          <Link to="/capnhatthongtin">
            <i className="fas fa-user-edit"></i>
            <span>Cập nhật thông tin</span>
          </Link>
        </div>
        <div className="User-Mobile-Item">
          <Link to="/lichsukham">
            <i className="fas fa-calendar-alt"></i>
            <span>Lịch sử đặt khám</span>
          </Link>
        </div>
        <div className="User-Mobile-Item">
          <div className="User-logout" onClick={handleLogout}>
            <i className="fas fa-sign-out-alt"></i>
            <span>Đăng xuất </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
