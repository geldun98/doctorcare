import React, { useRef, useEffect, useState } from 'react';
import informationApi from '../api/informationApi';
import questionApi from '../api/questionApi';
import commentApi from '../api/commentApi';
const InputQuestion = ({ handleUpdate }) => {
  const [listMajor, setListMajor] = useState([]);

  const valueAge = useRef();
  const valueGender = useRef();
  const valueMajor = useRef();
  const valueText = useRef();
  const valueImage = useRef();

  useEffect(() => {
    const fetchData = async () => {
      setListMajor(await informationApi.getAll().then((res) => res.data.majors));
    };
    fetchData();
  }, []);

  function handleSubmit() {
    const dataPost = {
      age: valueAge.current.value,
      gender: valueGender.current.checked,
      major: valueMajor.current.value,
      textarea: valueText.current.value,
      image: valueImage.current.value,
      time: Date.now(),
    };
    commentApi.add({ listcomment: [] });
    questionApi.add(dataPost).then((res) => {
      if (res.status) {
        valueAge.current.value = '';
        valueMajor.current.value = '';
        valueText.current.value = '';
        valueImage.current.value = '';

        handleUpdate();
      }
    });
  }

  return (
    <div className="InputQuestion">
      <h2 className="InputQuestion-title">ĐẶT CÂU HỎI VỚI BÁC SĨ</h2>
      <div className="InputQuestion-info">
        <div className="input-age">
          <input ref={valueAge}></input>
          Tuổi <span>*</span>
        </div>

        <div className="input-gender">
          <input type="radio" defaultChecked name="gender" ref={valueGender}></input>
          <span>Nam</span>
          <input type="radio" name="gender"></input>
          <span>Nữ</span>
        </div>
      </div>
      <div className="InputQuestion-major">
        Chuyên khoa
        <select ref={valueMajor}>
          <option></option>
          {listMajor.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
      </div>
      <div className="InputQuestion-textarea">
        <textarea ref={valueText} placeholder="Nhập câu hỏi của bạn"></textarea>
      </div>
      <div className="InputQuestion-image">
        <span>Link ảnh</span>
        <input ref={valueImage}></input>
      </div>
      <div className="InputQuestion-submit">
        <button onClick={handleSubmit}>Gửi</button>
      </div>
    </div>
  );
};

export default InputQuestion;
