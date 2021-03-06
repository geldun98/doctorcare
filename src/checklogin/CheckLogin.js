import React, { useContext, useEffect } from 'react';
import Context from '../store/Context';
const CheckLogin = () => {
  const [dataUser, setDataUser] = useContext(Context);

  useEffect(() => {
    if (localStorage.getItem('user')) {
      setDataUser(JSON.parse(localStorage.getItem('user')));
    }
  }, [setDataUser]);

  return <div></div>;
};

export default CheckLogin;
