import React from 'react';
import { Link } from 'react-router-dom';

const ItemQuestion = ({ data, image }) => {
  const gender = data.gender === true ? 'Nam' : 'Nữ';
  const date = new Date(data.time);

  return (
    <div className="ItemQuestion">
      <Link to={`/hoidap/detail?${data.id}`}>
        <div className="ItemQuestion-major">Chuyên khoa {data.major}</div>
        <div className="ItemQuestion-info">
          {gender} {data.age} tuổi
        </div>

        <div className="ItemQuestion-textarea">{data.textarea}</div>
        {image && <img src={image} alt="anh benh nhan"></img>}
        <div className="ItemQuestion-time">
          Ngày tạo: {date.getUTCDate()}/
          {date.getUTCMonth() <= 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1}/{date.getUTCFullYear()}
        </div>
      </Link>
    </div>
  );
};

export default ItemQuestion;
