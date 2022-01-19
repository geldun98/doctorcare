import { useEffect, useRef, useState } from 'react';
import { Fragment } from 'react/cjs/react.production.min';
import doctorApi from '../api/doctorApi';
import informationApi from '../api/informationApi';
import ItemDoctor from './ItemDoctor';
import './style.scss';

function SearchDoctor() {
  const [dataShow, setDataShow] = useState([]);
  const doctors = useRef();
  const information = useRef();
  const listMajor = useRef([]);
  const listPosition = useRef([]);

  const selectdata = useRef({ major: null, position: null, experience: null });

  const listValueExp = calcExp();
  useEffect(() => {
    const fetchDoctors = async () => {
      doctors.current = await doctorApi.getAll().then((res) => res.data);
      information.current = await informationApi.getAll().then((res) => res.data);
      listMajor.current = information.current.majors;
      listPosition.current = information.current.positions;
      setDataShow(doctors.current);
    };
    fetchDoctors();
  }, []);

  function handleSelect(e) {
    selectdata.current = { ...selectdata.current, [e.target.id]: e.target.value };
    handleFilter(selectdata.current);
  }
  function handleFilter(option) {
    if (option.major && option.position && option.experience) {
      setDataShow(
        doctors.current
          .filter((item) => item.major === option.major)
          .filter((item) => item.position === option.position)
          .filter((item) => parseInt(item.experience) >= parseInt(option.experience))
      );
      return;
    }
    if (option.major && option.position) {
      setDataShow(
        doctors.current
          .filter((item) => item.major === option.major)
          .filter((item) => item.position === option.position)
      );
      return;
    }
    if (option.major && option.experience) {
      setDataShow(
        doctors.current
          .filter((item) => item.major === option.major)
          .filter((item) => parseInt(item.experience) >= parseInt(option.experience))
      );
      return;
    }
    if (option.position && option.experience) {
      setDataShow(
        doctors.current

          .filter((item) => item.position === option.position)
          .filter((item) => parseInt(item.experience) >= parseInt(option.experience))
      );
      return;
    }
    if (option.major) {
      setDataShow(doctors.current.filter((item) => item.major === option.major));
      return;
    }
    if (option.position) {
      setDataShow(doctors.current.filter((item) => item.position === option.position));
      return;
    }
    if (option.experience) {
      setDataShow(doctors.current.filter((item) => parseInt(item.experience) >= parseInt(option.experience)));
      return;
    }

    setDataShow(doctors.current);
  }
  function calcExp() {
    let listExperience = [];
    for (let i = 1; i < 50; i++) {
      listExperience = [...listExperience, i];
    }
    return listExperience;
  }

  return (
    <Fragment>
      <div className="searchDoctor">
        <div className="SearchBox container">
          <span>Học vị</span>
          <select onChange={handleSelect} id="position" className="SearchSelect">
            <option></option>
            {listPosition.current.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <span>Chuyên nghành</span>
          <select onChange={handleSelect} id="major" className="SearchSelect">
            <option></option>
            {listMajor.current.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>

          <span>Năm công tác </span>
          <select onChange={handleSelect} id="experience" className="SearchSelect">
            <option></option>
            {listValueExp.map((item) => (
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
