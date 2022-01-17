import React, { useEffect, useState } from 'react';
import questionApi from '../api/questionApi';
import ItemQuestion from './ItemQuestion';
const ListQuestion = ({ update }) => {
  const [listDataQuestion, setListDataQuestion] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setListDataQuestion(await questionApi.getAll().then((res) => res.data));
    };
    fetchData();
  }, [update]);

  return (
    <div className="ListQuestion">
      {listDataQuestion.map((item, index) => (
        <ItemQuestion key={index} data={item}></ItemQuestion>
      ))}
    </div>
  );
};

export default ListQuestion;
