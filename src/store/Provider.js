import React, { useState } from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  const [dataDoctor, setDataDoctor] = useState([]);
  return <Context.Provider value={[dataDoctor, setDataDoctor]}>{children}</Context.Provider>;
};

export default Provider;
