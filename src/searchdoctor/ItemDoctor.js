import React from 'react';

const ItemDoctor = ({ data }) => {
  return (
    <div className="ItemDoctor">
      <div className="ItemDoctor-Image">
        <img src={data.image} alt="imagedoctor"></img>
      </div>
      <h2 className="ItemDoctor-Name">
        <span>{data.position}</span>
        {data.name}
      </h2>
      <p className="ItemDoctor-Work">{data.work}</p>
      <p className="ItemDoctor-Exp"> {data.experience} năm kinh nghiệm</p>
      <div className="ItemDoctor-Major"> Chuyên khoa: {data.major}</div>
      <button>Đặt khám</button>
    </div>
  );
};

export default ItemDoctor;
