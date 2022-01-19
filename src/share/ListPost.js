import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import postApi from '../api/postApi';
import ItemPost from './ItemPost';
const ListPost = () => {
  const [listPost, setListPost] = useState([]);
  useEffect(() => {
    const fetchDoctors = async () => {
      setListPost(await postApi.getAll().then((res) => res.data));
    };
    fetchDoctors();
  }, []);
  return (
    <div className="ListPost">
      <div className="ListPost-content container">
        {listPost.map((item, index) => (
          <Link to={`detailpost?${item.id}`} key={index}>
            <ItemPost key={index} data={item}></ItemPost>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ListPost;
