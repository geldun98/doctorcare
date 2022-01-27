import React, { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import historyuserApi from '../api/historyuserApi';
import updateTimeApi from '../api/updateTimeApi';
import Context from '../store/Context';
const Picktime = ({ id, name }) => {
    const [dataUser, setDataUser] = useContext(Context);
    const [dataTime, setDataTime] = useState([]);
    const [dataIdTime, setDataIdTime] = useState('');
    const [data, setData] = useState({});
    const [count, setCount] = useState(0);
    const dataId = useRef();
    const valueDate = useRef();
    useEffect(() => {
        const fetchDoctors = async () => {
            const valuedata = await updateTimeApi.get(id).then((res) => res.data);
            setData(valuedata);
            const firstDate = '2022-01-05';
            valueDate.current.value = firstDate;

            setDataTime(valuedata.listdate.find((item) => item.value === firstDate).listtime);
        };
        fetchDoctors();
    }, [id]);
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

            if (dataUser.role === 'user') {
                const data_history_user = {
                    id_doctor: id,
                    name_doctor: name,
                    date: valueDate.current.value,
                    time: ItemTime.value,
                    username: dataUser.username,
                };
                historyuserApi.add(data_history_user);
            }

            setCount(count + 1);
            updateTimeApi.update(data).then((res) => { });

            dataId.current = null;
        }
    }

    return (
        <div className="time">
            <div className="pick-time">
                <h5>Lịch tư vấn trực tuyến</h5>
                <div>
                    <input type="date" onChange={handleDate} ref={valueDate}></input>
                </div>
                <div>
                    {dataTime.map((item, index) => (
                        <button className={`picktime ${item.status}`} key={index} id={item.id_time} onClick={handleClickTime}>
                            {item.value}
                        </button>
                    ))}
                </div>
                {dataUser.role === 'user' && (
                    <button className="save" onClick={handletuvan}>
                        <i className="fas fa-video"></i>Tư vấn trực tuyến
                    </button>
                )}
                {!dataUser.username && (
                    <p className="time-register">
                        Để đặt lịch tư vấn <Link to="/dangnhap/sigin">Đăng ký ngay</Link>{' '}
                    </p>
                )}
            </div>
        </div>
    );
};
export default Picktime;
