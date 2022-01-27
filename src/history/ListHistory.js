import React, { useState, useEffect, useContext } from 'react';
import historyuserApi from '../api/historyuserApi';
import Context from '../store/Context';
import ItemHistory from './ItemHistory';
const ListHistory = () => {
  const [dataShow, setDataShow] = useState([]);
  const [dataUser, setDataUser] = useContext(Context);

  useEffect(() => {
    const fetchData = async () => {
      const dataApi = await historyuserApi.getAll().then((res) => res.data);
      if (dataUser.role === 'user') {
        setDataShow(dataApi.filter((item) => item.username === dataUser.username));
      }
      if (dataUser.role === 'doctor') {
        setDataShow(dataApi.filter((item) => item.id_doctor === `${dataUser.id}`));
      }
    };
    fetchData();
  }, [dataUser]);

  return (
    <div className="ListHistory">
      <div className="ListHistory-content container">
        <h1>Lịch sử đặt khám</h1>
        <div className="ListHistory-title">
          {dataUser.role === 'user' && <div className="ListHistory-title-name">Tên bác sĩ</div>}
          {dataUser.role === 'doctor' && <div className="ListHistory-title-name">Bệnh nhân</div>}

          <div className="ListHistory-title-date">Ngày khám </div>
          <div className="ListHistory-title-time">Thời gian</div>
        </div>
        {dataShow.map((item, index) => (
          <ItemHistory data={item} role={dataUser.role} key={index}></ItemHistory>
        ))}
      </div>
    </div>
  );
};

export default ListHistory;
