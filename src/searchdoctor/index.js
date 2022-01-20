import Slider from '@mui/material/Slider';
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

  const selectdata = useRef({ major: null, position: null });

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
    if (option.major && option.position) {
      setDataShow(
        doctors.current
          .filter((item) => item.major === option.major)
          .filter((item) => item.position === option.position)
          .filter(
            (item) => parseInt(item.experience) >= valueExperience[0] && parseInt(item.experience) <= valueExperience[1]
          )
      );
      return;
    }

    if (option.major) {
      setDataShow(
        doctors.current
          .filter((item) => item.major === option.major)
          .filter(
            (item) => parseInt(item.experience) >= valueExperience[0] && parseInt(item.experience) <= valueExperience[1]
          )
      );
      return;
    }
    if (option.position) {
      setDataShow(
        doctors.current

          .filter((item) => item.position === option.position)
          .filter(
            (item) => parseInt(item.experience) >= valueExperience[0] && parseInt(item.experience) <= valueExperience[1]
          )
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

    setDataShow(doctors.current);
  }

  const minDistance = 1;
  const [valueExperience, setvalueExperience] = useState([1, 5]);
  function valuetext(value) {
    return `${value}`;
  }

  const handleRange = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }
    handleFilter(selectdata.current);

    if (activeThumb === 0) {
      setvalueExperience([Math.min(newValue[0], valueExperience[1] - minDistance), valueExperience[1]]);
    } else {
      setvalueExperience([valueExperience[0], Math.max(newValue[1], valueExperience[0] + minDistance)]);
    }
  };
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
          <div>
            <span> {`Năm công tác : từ ${valueExperience[0]} đến ${valueExperience[1]} năm`} </span>
            <div className="inputExperience">
              <Slider
                getAriaLabel={() => 'Minimum distance'}
                value={valueExperience}
                onChange={handleRange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
                disableSwap
                max={50}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="ListDoctor ">
        <div className="ListDoctorContent container">
          {dataShow.map((item, index) => (
            <ItemDoctor key={index} data={item}></ItemDoctor>
          ))}
        </div>
      </div>
    </Fragment>
  );
}

export default SearchDoctor;
