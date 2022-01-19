import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import questionApi from '../api/questionApi';
import ItemQuestion from './ItemQuestion';
import ListComment from './ListComment';
const DetailQuestion = () => {
  const location = useLocation();
  const id = location.search.split('?').join('');

  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setData(await questionApi.get(id).then((res) => res.data));
    };
    fetchData();
  }, []);

  return (
    <div className="DetailQuestion">
      <div className="DetailQuestion container">
        <ItemQuestion data={data} image={data.image}></ItemQuestion>
        <ListComment id={id}></ListComment>
      </div>
    </div>
  );
};

export default DetailQuestion;
