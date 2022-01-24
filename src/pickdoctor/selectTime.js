import React, { useState, useEffect, useRef } from 'react';
import timtableApi from '../api/timetableApi';
import updateTimeApi from '../api/updateTimeApi';

const Picktime = () => {
    const [dataTime, setDataTime] = useState([]);
    const [dataIdTime, setDataIdTime] = useState('');
    const [data, setData] = useState({})
    const cloneData = useRef(data);
    const dataId = useRef();
    useEffect(() => {
        const fetchDoctors = async () => {
            setData(await updateTimeApi.get(1).then((res) => res.data));
        };
        fetchDoctors();
    }, []);
    function handleDate(e) {
        // console.log(e.target.value);
        const dataDate = solutionListTime(e.target.value);
        const dataTime = dataDate[0].listtime;
        setDataTime(dataTime);
    }
    function solutionListTime(date) {
        return data.listdate.filter((item) => {
            return item.value === date;
        })
    }
    function handleClickTime(e) {
        setDataIdTime(e.target.id);
        dataId.current = e.target.id;


    }
    function handletuvan() {

        setData((data.listdate[0].listtime[dataId.current - 1].status = false));
        cloneData.current.listdate[0].listtime[dataId.current - 1].status = false;
        updateTimeApi.update(cloneData.current).then((res) => {
            if (res.status) {
                console.log(res.status);
            }
        })
    }


    return (
        <div className="time">
            <div className="pick-time">
                <h5>Lịch tư vấn trực tuyến</h5>
                <div><input type="date" onChange={handleDate}></input></div>
                <div>
                    {dataTime.map((item, index) => (
                        <button className={`picktime ${item.status}`} key={index} id={item.id_time} onClick={handleClickTime}>{item.value}</button>
                    )
                    )}


                </div>
                <button className='save' onClick={handletuvan} ><i className="fas fa-video"></i>Tư vấn trực tuyến</button>


            </div>
        </div>
    )
}
export default Picktime;