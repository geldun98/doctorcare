import React, { useState, useEffect, useRef, useContext } from 'react';
import InputComment from './InputComment';
import commentApi from '../api/commentApi';
import Context from '../store/Context';
const ListComment = ({ id }) => {
  const [listShow, setListShow] = useState([]);
  const [listData, setListData] = useState({});
  const [dataUser, setDataUser] = useContext(Context);
  const [count, setCount] = useState(0);
  const newlistcomment = useRef([]);
  function handleSubmit(valueText) {
    const addNewPost = {
      iduser: Number(dataUser.id),
      content: valueText,
      role: dataUser.role,
    };
    newlistcomment.current = [...listData.listcomment, addNewPost];

    const dataPost = {
      id: listData.id,
      listcomment: newlistcomment.current,
    };

    console.log(dataPost);
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
  }, [id,count]);

  return (
    <div className="ListComment">
      <h1>Bình Luận</h1>
      {listShow.map((item, index) => (
        <div className="ItemComment" key={index}>
          <span className={`ItemComment-user role${item.role}`}>{`${item.role}`}</span>
          <span className="ItemComment-content"> {item.content}</span>
        </div>
      ))}

      <InputComment handleSubmit={handleSubmit}></InputComment>
    </div>
  );
};

export default ListComment;
