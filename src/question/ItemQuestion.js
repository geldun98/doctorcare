import React from 'react';

const ItemQuestion = ({ data }) => {
  const gender = data.gender === true ? 'Nam' : 'Nữ';
  const date = new Date(data.time);

  return (
    <div className="ItemQuestion">
      <div className="ItemQuestion-major">Chuyên khoa {data.major}</div>
      <div className="ItemQuestion-info">
        {gender} {data.age} tuổi
      </div>

      <div className="ItemQuestion-textarea">{data.textarea}</div>

      <div className="ItemQuestion-time">
        Ngày tạo: {date.getUTCDate()}/{date.getUTCMonth() <= 10 ? `0${date.getUTCMonth() + 1}` : date.getUTCMonth() + 1}
        /{date.getUTCFullYear()}
      </div>
    </div>
  );
};

export default ItemQuestion;
