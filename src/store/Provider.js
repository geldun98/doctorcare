import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [dataUser, setDataUser] = useState({});
  return <Context.Provider value={[dataUser, setDataUser]}>{children}</Context.Provider>;
};

export default Provider;
