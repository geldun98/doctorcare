import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Context from './store/Context';
const PickDoctor = () => {
  const [dataDoctor, setDataDoctor] = useContext(Context);

  const location = useLocation();
  console.log(dataDoctor[location.search.split('?').join('')]);

  return <div>{dataDoctor[location.search.split('?').join('')].name}</div>;
};

export default PickDoctor;
