import React from 'react';
import ItemNav from './ItemNav';

const Navbar = () => {
  return (
    <div className="Navbar">
      <div className="Navbar-Logo">
        <span>Doctor Care</span>
      </div>
      <div className="Navbar-List">
        <ItemNav url="/trangchu">Trang chủ</ItemNav>
        <ItemNav url="/datkham">Đặt khám</ItemNav>
        <ItemNav url="/hoidap">Hỏi đáp</ItemNav>
        <ItemNav url="/chiase">Chia sẻ</ItemNav>
        <ItemNav url="/dangnhap/?sigin">Đăng nhập</ItemNav>
        <ItemNav url="/capnhatthongtin">Cập nhật thông tin</ItemNav>
      </div>
    </div>
  );
};

export default Navbar;
