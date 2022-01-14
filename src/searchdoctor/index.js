import { useEffect, useState, useContext, useRef } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import doctorApi from '../api/doctorApi';
import Context from '../store/Context';
import ItemDoctor from './ItemDoctor';
import './style.scss';

function SearchDoctor() {
  const [dataShow, setDataShow] = useState([]);
  const doctors = useRef();
  const [dataDoctor, setDataDoctor] = useContext(Context);
  const listWork = [null, 'BÁC SĨ ƠI - PHÒNG KHÁM O2O', 'Bệnh viện Hữu Nghị Việt Đức'];
  const listMajor = [null, 'Tai Mũi Họng', 'TT Nam học', 'Phẫu Thuật Cột sống', 'Nội tiết'];
  const selectdata = useRef({ major: null, work: null });
  useEffect(() => {
    const fetchDoctors = async () => {
      doctors.current = await doctorApi.getAll().then((res) => res.data);
      setDataShow(doctors.current);
    };
    fetchDoctors();
  }, []);
  function handleButton() {
    setDataDoctor(doctors.current);
  }

  function handleSelect(e) {
    selectdata.current = { ...selectdata.current, [e.target.id]: e.target.value };
    handleFilter(selectdata.current);
  }
  function handleFilter(option) {
    if (option.major && option.work) {
      setDataShow(
        doctors.current.filter((item) => item.major === option.major).filter((item) => item.work === option.work)
      );
      return;
    }
    if (option.major) {
      setDataShow(doctors.current.filter((item) => item.major === option.major));
    }
    if (option.work) {
      setDataShow(doctors.current.filter((item) => item.work === option.work));
    }
  }

  return (
    <Fragment>
      <div className="searchDoctor">
        <div className="SearchBox container">
          <span>Chuyển nghành</span>
          <select onChange={handleSelect} id="major" className="SearchSelect">
            {listMajor.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <span>Nơi công tác</span>
          <select onChange={handleSelect} id="work" className="SearchSelect">
            {listWork.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="ListDoctor ">
        <div className="ListDoctorContent container">
          {dataShow.map((item, index) => (
            <ItemDoctor key={index} data={item} handleButton={handleButton}></ItemDoctor>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default SearchDoctor;
