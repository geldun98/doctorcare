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
    <div className="pickdoctor container" style={{ marginTop: '20px' }}>
      <div className="d-flex">
        <div>
          <img src={dataShow.image} alt="doctorpicture" />
        </div>
        <div className="infor">
          <h3>
            {dataShow.position}
            {dataShow.name}
          </h3>
          <p>{dataShow.work}</p>
          <mark>{dataShow.major}</mark>

          <span>
            <i className="fas fa-users"></i>Lượt tư vấn:{' '}<b>{dataShow.appointment}</b>
          </span>



          <span>
            <i className="fas fa-star"></i>Đánh giá:{' '}<b>{dataShow.vote}</b>
          </span>


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
