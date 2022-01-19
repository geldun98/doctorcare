import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import postApi from '../api/postApi';
const DetailPost = () => {
  const location = useLocation();
  const id = location.search.split('?').join('');

  const [data, setData] = useState({ title: '', content: '' });
  useEffect(() => {
    const fetchData = async () => {
      setData(await postApi.get(id).then((res) => res.data));
    };
    fetchData();
  }, []);
  return (
    <div className="DetailPost">
      <div className="DetailPost-body container">
        <div className="DetailPost-title">{data.title}</div>
        <div className="DetailPost-content" dangerouslySetInnerHTML={{ __html: `${data.content}` }}></div>
      </div>
    </div>
  );
};

export default DetailPost;
