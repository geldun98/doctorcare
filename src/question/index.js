import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import DetailQuestion from './DetailQuestion';
import InputQuestion from './InputQuestion';
import ListQuestion from './ListQuestion';
import './style.scss';
const Question = () => {
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
              <InputQuestion handleUpdate={handleUpdate}> </InputQuestion>
            </div>
          }
        ></Route>
        <Route path="/detail" element={<DetailQuestion></DetailQuestion>}></Route>
      </Routes>
    </div>
  );
};

export default Question;
