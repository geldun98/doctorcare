import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './style.scss';
import doctorApi from '../api/doctorApi';
import Picktime from './selectTime';

const DoctorDetail = () => {
  const [dataShow, setDataShow] = useState([]);

  const location = useLocation();
  const id = location.search.split('?').join('');
  useEffect(() => {
    const fetchDoctors = async () => {
      setDataShow(await doctorApi.get(id).then((res) => res.data));
    };
    fetchDoctors();
  }, [id]);

  function createMarkup() {
    const convert = dataShow.detail;
    return { __html: `${convert}` };
  }

  return (
    <div className="pickdoctor container">
      <div className="d-flex">
        <div>
          <img src={dataShow.image} alt="doctorpicture" />
        </div>
        <div className="infor">
          <h3>
            <span> {dataShow.position} </span>
            {dataShow.name}
          </h3>
          <p>{dataShow.work}</p>
          <mark>{dataShow.major}</mark>
        </div>
        <div className="more-infor">
          <p>
            <span>
              <i className="fas fa-users"></i>Lượt tư vấn:{' '}
            </span>
            <b>{dataShow.appointment}</b>
          </p>
          <p>
            <span>
              <i className="fas fa-star"></i>Đánh giá:{' '}
            </span>
            <b>{dataShow.vote}</b>
          </p>
        </div>
      </div>
      <Picktime id={id} name={dataShow.name}></Picktime>
      <div className="doctor-expensive">
        <h5>Kinh nghiệm khám chữa bệnh</h5>
        <div className="doctor-exp" dangerouslySetInnerHTML={createMarkup()}></div>
      </div>
    </div>
  );
};

export default DoctorDetail;
