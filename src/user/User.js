import React, { useContext } from 'react';
import Context from '../store/Context';
import NavUser from './NavUser';
import { useNavigate } from 'react-router-dom';
import './style.scss';
const User = () => {
  const [dataUser, setDataUser] = useContext(Context);
  const navigate = useNavigate();
  function handleLogout() {
    localStorage.removeItem('user');
    setDataUser({});
    navigate('/trangchu');
  }
  return (
    <div className="User">
      <div className="User-Desktop">
        <div className="User-account">
          {dataUser.username}
          {<i className="fas fa-user"></i>}
        </div>

        <div className="User-menu">
          <NavUser handleLogout={handleLogout}></NavUser>
        </div>
      </div>
      <div className="User-Mobile">Mobile</div>
    </div>
  );
};

export default User;
