import React, { useEffect, useContext } from 'react';
import Context from '../store/Context';
const CheckLogin = () => {
  const [dataUser, setDataUser] = useContext(Context);
  useEffect(() => {
    if (localStorage.getItem('user')) {
      setDataUser(JSON.parse(localStorage.getItem('user')));
    }
  }, []);
  return <div></div>;
};

export default CheckLogin;
