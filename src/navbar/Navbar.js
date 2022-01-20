import React, { useEffect, useContext, useState } from 'react';
import ItemNav from './ItemNav';
import Context from '../store/Context';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [dataUser, setDataUser] = useContext(Context);
  const navigate = useNavigate();
  let hide = false;
  if (dataUser.id) {
    hide = !hide;
  }
  function handleLogout() {
    localStorage.removeItem('user');
    setDataUser({});
    navigate('/trangchu');
  }
  return (
    <div className="Navbar">
      <div className="Navbar-Logo">
        <span>Doctor Care</span>
        <p>Dịch vụ tư vấn sức khỏe hàng đầu</p>
      </div>
      <div className="Navbar-List">
        <ItemNav url="/trangchu">Trang chủ</ItemNav>
        <ItemNav url="/datkham">Đặt khám</ItemNav>
        <ItemNav url="/hoidap">Hỏi đáp</ItemNav>
        <ItemNav url="/camnang">Cẩm nang</ItemNav>
        {hide && <ItemNav url="/capnhatthongtin">Cập nhật thông tin</ItemNav>}
        {!hide && <ItemNav url="/dangnhap/sigin">Đăng nhập</ItemNav>}
        {hide && <button onClick={handleLogout}>Đăng Xuất</button>}
      </div>
    </div>
  );
};

export default Navbar;
