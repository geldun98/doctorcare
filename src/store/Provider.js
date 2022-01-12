import React from 'react';
import Context from './Context';

const Provider = ({ children }) => {
  return <Context.Provider value={'hello'}>{children}</Context.Provider>;
};

export default Provider;
