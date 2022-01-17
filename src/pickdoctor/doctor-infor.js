


import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import Context from '../store/Context';
import './style.css'

const DoctorDetail = () => {
  const [dataDoctor, setDataDoctor] = useContext(Context);

  const location = useLocation();
  console.log(dataDoctor);
  function createMarkup() {
    const convert = dataDoctor[location.search.split('?').join('') - 1].detail;
    return { __html: `${convert}` };
  }
  return (

    <div className="container">
      <div className='d-flex'>
        <div>
          <img src={dataDoctor[location.search.split('?').join('') - 1].image} />
        </div>
        <div >

          <h3><span> {dataDoctor[location.search.split('?').join('') - 1].position} </span>
            {dataDoctor[location.search.split('?').join('') - 1].name}</h3>
          <p>{dataDoctor[location.search.split('?').join('') - 1].work}</p>
          <mark>{dataDoctor[location.search.split('?').join('') - 1].major}</mark>
        </div>

      </div>
      <div className='time'>
        <div className='pick-time'>
          <h5>Lịch tư vấn trực tuyến</h5>
        </div>
      </div>
      <div className='doctor-exp' dangerouslySetInnerHTML={createMarkup()}></div>


    </div>



  );


};

export default DoctorDetail;
