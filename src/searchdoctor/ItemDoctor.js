import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const ItemDoctor = ({ data }) => {
  useEffect(() => {
    AOS.init({ duration: 1500 })
  })
  const url = `/pickdoctor?${data.id}`;
  return (
    <div className="ItemDoctor" data-aos="flip-left">
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

      <Link to={url}>
        <button ><i className="fas fa-stethoscope" style={{ marginRight: '20px' }}></i>Đặt khám</button>
      </Link>
    </div >
  );
};

export default ItemDoctor;
