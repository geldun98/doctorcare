import React, { useEffect, useContext, useState } from 'react';
import ItemNav from './ItemNav';
import Context from '../store/Context';

import { Link } from 'react-router-dom';
import User from '../user/User';
const Navbar = () => {
  const [dataUser, setDataUser] = useContext(Context);

  let hide = false;
  if (dataUser.id) {
    hide = !hide;
  }

  return (
    <div className="Navbar">
      <Link to="/trangchu">
        <div className="Navbar-Logo">
          <span>Doctor Care</span>
          <p>Dịch vụ tư vấn sức khỏe hàng đầu</p>
        </div>
      </Link>

      <div className="Navbar-List">
        <ItemNav url="/trangchu">Trang chủ</ItemNav>
        <ItemNav url="/datkham">Đặt khám</ItemNav>
        <ItemNav url="/hoidap">Hỏi đáp</ItemNav>
        <ItemNav url="/camnang">Cẩm nang</ItemNav>

        {!hide && <ItemNav url="/dangnhap/sigin">Đăng nhập</ItemNav>}
        {hide && <User></User>}
      </div>
    </div>
  );
};

export default Navbar;
