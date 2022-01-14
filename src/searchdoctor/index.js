import { useEffect, useState, useContext } from 'react';
import doctorApi from '../api/doctorApi';
import Context from '../store/Context';
import ItemDoctor from './ItemDoctor';
import './style.scss';

function SearchDoctor() {
  const [doctors, setDoctors] = useState([]);
  const [works, setWorks] = useState([]);
  const [majors, setMajors] = useState([]);
  const [dataShow, setDataShow] = useState([]);
  const [dataDoctor, setDataDoctor] = useContext(Context);

  const [selectdata, setSelectdata] = useState({ major: null, work: null });
  useEffect(() => {
    const fetchDoctors = async () => {
      const doctorList = await doctorApi.getAll();
      const workList = await doctorApi.getAll();
      const majorList = await doctorApi.getAll();
      setDoctors(doctorList);
      setDataShow(doctorList);
      setWorks(workList);
      setMajors(majorList);
    };
    fetchDoctors();
  }, []);
  function filterMajor(major) {
    return doctors.filter((item) => item.major === major);
  }
  function filterWork(work) {
    return doctors.filter((item) => item.work === work);
  }
  function handleData(selectdata) {
    setSelectdata(selectdata);

    setDataDoctor(doctors);

    if (selectdata.major && selectdata.work) {
      setDataShow(filterMajor(selectdata.major).filter((item) => item.work === selectdata.work));
      return;
    }
    if (selectdata.major) {
      setDataShow(filterMajor(selectdata.major));
    }
    if (selectdata.work) {
      setDataShow(filterWork(selectdata.work));
    }
  }

  return (
    <div className="SearchDoctor">
      <div className="SearchBox container">
        <div className="SearchSelect">
          <span>Chuyên ngành:</span>
          <select
            onChange={(e) => {
              const newselectdata = { ...selectdata, major: e.target.value };

              handleData(newselectdata);
            }}
          >
            <option></option>
            <option>Tai Mũi Họng</option>
            <option>TT Nam học</option>
            <option>Phẫu Thuật Cột sống</option>
            <option>Nội tiết</option>
          </select>
        </div>

        <div className="SearchSelect">
          <span>Nơi làm việc</span>
          <select
            onChange={(e) => {
              const newselectdata = { ...selectdata, work: e.target.value };
              handleData(newselectdata);
            }}
          >
            <option></option>
            <option>BÁC SĨ ƠI - PHÒNG KHÁM O2O</option>
            <option>Bệnh viện Hữu Nghị Việt Đức</option>
          </select>
        </div>
      </div>
      <div className="ListDoctor ">
        <div className="ListDoctorContent container">
          {dataShow.map((item, index) => (
            <ItemDoctor key={index} data={item}></ItemDoctor>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchDoctor;
