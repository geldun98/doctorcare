import React from 'react';
import './style.scss';
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Image">
        <div className="Home-Content">
          <h3>Tìm bác sĩ, bệnh viện dễ dàng hơn</h3>
          <p>Chủ động đặt lịch hẹn thông minh và được chăm sóc tận tình</p>
        </div>
        <img
          src="http://www.lumahealth.io/wp-content/uploads/2018/05/Transparency-in-the-Doctor-Patient-Relationship-1.jpg"
          alt="home"
        ></img>
      </div>
    </div>
  );
};

export default Home;
