import React from 'react';
import './style.scss';
const Home = () => {
  return (
    <div className="Home">
      <div className="Home-Image">
        <div className="Home-Content">
          <h3>Tìm bác sĩ, bệnh viện dễ dàng hơn</h3>
          <p>Chủ động đặt lịch hẹn thông minh và được chăm sóc tận tình</p>
          <input className="Home-Content_input" placeholder="Nhập tên bác sĩ, bệnh viện, dịch vụ..."></input>
          <button className="btnSearch">Tìm kiếm</button>
        </div>
        {/* <img
          src="http://www.lumahealth.io/wp-content/uploads/2018/05/Transparency-in-the-Doctor-Patient-Relationship-1.jpg"
          alt="home"
        ></img> */}
        <img
          src="https://motortradescare.com.au/wp-content/uploads/2020/11/shutterstock_1721876416-NTD-Agreement-scaled.jpg"
          alt="home"
        ></img>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide slider" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/xet-nghiem-khang-the-covid-19-sau-tiem-isofhcare_5c16dadf_cb85_41aa_a4e4_4b04a58385e9.png"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/noisoi-01-(2)_5f7d3a6e_6fbf_4645_a10f_7986cf41e8d4.jpg"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
          <div className="carousel-item">
            <img
              src="https://isofhcare-backup.s3-ap-southeast-1.amazonaws.com/images/banner-van-chuyen-nguoi-benh-f0-tai-ha-noi-isofhcare_48e2002e_3f1f_4182_9d0e_1eb01893c179.jpg"
              className="d-block w-100"
              id="slide_img"
              alt="..."
            ></img>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
