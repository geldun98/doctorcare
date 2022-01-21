import React, { useState, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailQuestion from './DetailQuestion';
import InputQuestion from './InputQuestion';
import ListQuestion from './ListQuestion';
import './style.scss';
import Context from '../store/Context';
const Question = () => {
  const [dataUser, setDataUser] = useContext(Context);
  let role = dataUser.role;
  let checkShow = false;
  if (role === 'user') {
    checkShow = true;
  }
  const [update, setUpdate] = useState(0);
  function handleUpdate() {
    setUpdate(update + 1);
  }

  return (
    <div className="Question">
      <Routes>
        <Route
          path="/"
          element={
            <div className="Question-content container">
              <ListQuestion update={update}></ListQuestion>
              {checkShow && <InputQuestion handleUpdate={handleUpdate}> </InputQuestion>}
            </div>
          }
        ></Route>
        <Route path="/detail" element={<DetailQuestion></DetailQuestion>}></Route>
      </Routes>
    </div>
  );
};

export default Question;
