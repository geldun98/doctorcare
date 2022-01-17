import React, { useState } from 'react';
import InputQuestion from './InputQuestion';
import ListQuestion from './ListQuestion';
import './style.scss';
const Question = () => {
  const [update, setUpdate] = useState(0);
  function handleUpdate() {
    setUpdate(update + 1);
  }
  console.log(update);
  return (
    <div className="Question">
      <div className="Question-content container">
        <ListQuestion update={update}></ListQuestion>
        <InputQuestion handleUpdate={handleUpdate}> </InputQuestion>
      </div>
    </div>
  );
};

export default Question;
