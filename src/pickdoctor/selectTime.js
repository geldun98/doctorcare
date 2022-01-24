import React, { useState, useEffect, useRef, useContext } from 'react';
import timtableApi from '../api/timetableApi';
import updateTimeApi from '../api/updateTimeApi';
import Context from '../store/Context';

const Picktime = ({ id }) => {
  const [dataUser, setDataUser] = useState(Context);
  const [dataTime, setDataTime] = useState([]);
  const [dataIdTime, setDataIdTime] = useState('');
  const [data, setData] = useState({});
  const [count, setCount] = useState(0);
  const dataId = useRef();
  useEffect(() => {
    const fetchDoctors = async () => {
      setData(await updateTimeApi.get(id).then((res) => res.data));
    };
    fetchDoctors();
  }, []);
  function handleDate(e) {
    const dataDate = solutionListTime(e.target.value);

    const dataTime = dataDate.listtime;

    setDataTime(dataTime);
  }
  function solutionListTime(date) {
    return data.listdate.find((item) => item.value === date);
  }
  function handleClickTime(e) {
    setDataIdTime(e.target.id);
    dataId.current = e.target.id;
  }
  function handletuvan() {
    if (dataId.current) {
      const ItemTime = dataTime.find((item) => item.id_time === Number(dataId.current));
      ItemTime.status = false;

      setCount(count + 1);
      updateTimeApi.update({ ...data }).then((res) => {
        if (res.status) {
        }
      });
      dataId.current = null;
    }
  }

  return (
    <div className="time">
      <div className="pick-time">
        <h5>Lịch tư vấn trực tuyến</h5>
        <div>
          <input type="date" onChange={handleDate}></input>
        </div>
        <div>
          {dataTime.map((item, index) => (
            <button className={`picktime ${item.status}`} key={index} id={item.id_time} onClick={handleClickTime}>
              {item.value}
            </button>
          ))}
        </div>
        <button className="save" onClick={handletuvan}>
          <i className="fas fa-video"></i>Tư vấn trực tuyến
        </button>
      </div>
    </div>
  );
};
export default Picktime;
