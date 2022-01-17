import React, { useState, useEffect, useRef } from 'react';
import InputComment from './InputComment';
import commentApi from '../api/commentApi';
const ListComment = ({ id }) => {
  const [listShow, setListShow] = useState([]);
  const [listData, setListData] = useState({});
  const [count, setCount] = useState(0);
  const newlistcomment = useRef([]);
  function handleSubmit(valueText) {
    const addNewPost = {
      iduser: Number(id),
      content: valueText,
    };
    newlistcomment.current = [...listData.listcomment, addNewPost];

    const dataPost = {
      id: listData.id,
      listcomment: newlistcomment.current,
    };

    commentApi.update(dataPost).then(() => {
      setListData(dataPost);
      setCount(count + 1);
    });
  }
  useEffect(() => {
    const fetchData = async () => {
      setListData(await commentApi.get(id).then((res) => res.data));
      setListShow(await commentApi.get(id).then((res) => res.data.listcomment));
    };
    fetchData();
  }, [count]);

  return (
    <div className="ListComment">
      <h1>Bình Luận</h1>
      {listShow.map((item, index) => (
        <div className="ItemComment" key={index}>
          <span className="ItemComment-user">UserId{item.iduser}</span>
          <span className="ItemComment-content"> {item.content}</span>
        </div>
      ))}

      <InputComment handleSubmit={handleSubmit}></InputComment>
    </div>
  );
};

export default ListComment;
