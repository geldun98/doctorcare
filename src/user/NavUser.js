import React from 'react';
import { Link } from 'react-router-dom';

const NavUser = ({ handleLogout }) => {
  return (
    <div className="NavUser">
      <div className="NavUser-item-close">
        <i className="fas fa-times"></i>
      </div>
      <div className="NavUser-item">
        <Link to="/capnhatthongtin">
          <i className="fas fa-user-edit"></i>
          <span>Cập nhật thông tin</span>
        </Link>
      </div>
      <div className="NavUser-item">
        <Link to="/lichsukham">
          <i className="fas fa-calendar-alt"></i>
          <span>Lịch sử đặt khám</span>
        </Link>
      </div>
      <div className="NavUser-item" onClick={handleLogout}>
        <div className="User-logout">
          <i className="fas fa-sign-out-alt"></i>
          <span>Đăng xuất </span>
        </div>
      </div>
    </div>
  );
};

export default NavUser;
