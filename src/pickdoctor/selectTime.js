import React, { useState } from 'react';

const Picktime = () => {
    const [dataTime, setDataTime] = useState([]);
    const [dataIdTime, setDataIdTime] = useState('');
    const [data, setData] = useState([
        {
            id: 1,
            id_doctor: 1,
            listdate: [
                {
                    id_date: 1,
                    value: '2022-01-05',
                    listtime: [
                        { id_time: 1, value: '8:00', status: true },
                        { id_time: 2, value: '8:30', status: true },
                        { id_time: 3, value: '9:00 ', status: true },
                        { id_time: 4, value: '9:30', status: true },
                        { id_time: 5, value: '10:00', status: true },
                        { id_time: 6, value: '10:30', status: true },

                    ]
                },
                {
                    id_date: 2,
                    value: '2022-01-06',
                    listtime: [
                        { id_time: 1, value: '8:00', status: true },
                        { id_time: 2, value: '8:30', status: true },
                        { id_time: 3, value: '9:00 ', status: true },
                        { id_time: 4, value: '9:30', status: true },
                        { id_time: 5, value: '10:00', status: true },
                        { id_time: 6, value: '10:30', status: true },
                        { id_time: 7, value: '11:00', status: true },
                        { id_time: 8, value: '11:30', status: true },
                        { id_time: 9, value: '14:00', status: true },
                        { id_time: 10, value: '14:30', status: true },
                        { id_time: 11, value: '15:00', status: true },
                        { id_time: 12, value: '15:30', status: true },
                        { id_time: 13, value: '16:00', status: true },
                        { id_time: 14, value: '16:30', status: true },
                        { id_time: 15, value: '17:00', status: true },
                    ]
                },
                {
                    id_date: 3,
                    value: '2022-01-07',
                    listtime: [
                        { id_time: 1, value: '8:00', status: true },
                        { id_time: 2, value: '8:30', status: true },
                        { id_time: 3, value: '9:00 ', status: true },
                        { id_time: 4, value: '9:30', status: true },
                        { id_time: 5, value: '10:00', status: true },
                        { id_time: 6, value: '10:30', status: true },
                        { id_time: 7, value: '11:00', status: true },
                        { id_time: 8, value: '11:30', status: true },
                        { id_time: 9, value: '14:00', status: true },
                        { id_time: 10, value: '14:30', status: true },
                        { id_time: 11, value: '15:00', status: true },
                        { id_time: 12, value: '15:30', status: true },
                        { id_time: 13, value: '16:00', status: true },
                        { id_time: 14, value: '16:30', status: true },
                        { id_time: 15, value: '17:00', status: true },
                    ]
                },
                {
                    id_date: 4,
                    value: '2022-01-08',
                    listtime: [
                        { id_time: 1, value: '8:00', status: true },
                        { id_time: 2, value: '8:30', status: true },
                        { id_time: 3, value: '9:00 ', status: true },
                        { id_time: 4, value: '9:30', status: true },
                        { id_time: 5, value: '10:00', status: true },
                        { id_time: 6, value: '10:30', status: true },
                        { id_time: 7, value: '11:00', status: true },
                        { id_time: 8, value: '11:30', status: true },
                        { id_time: 9, value: '14:00', status: true },
                        { id_time: 10, value: '14:30', status: true },
                        { id_time: 11, value: '15:00', status: true },
                        { id_time: 12, value: '15:30', status: true },
                        { id_time: 13, value: '16:00', status: true },
                        { id_time: 14, value: '16:30', status: true },
                        { id_time: 15, value: '17:00', status: true },

                    ]
                }, {
                    id_date: 5,
                    value: '2022-01-09',
                    listtime: [
                        { id_time: 1, value: '8:00', status: true },
                        { id_time: 2, value: '8:30', status: true },
                        { id_time: 3, value: '9:00 ', status: true },
                        { id_time: 4, value: '9:30', status: true },
                        { id_time: 5, value: '10:00', status: true },
                        { id_time: 6, value: '10:30', status: true },
                        { id_time: 7, value: '11:00', status: true },
                        { id_time: 8, value: '11:30', status: true },
                        { id_time: 9, value: '14:00', status: true },
                        { id_time: 10, value: '14:30', status: true },
                        { id_time: 11, value: '15:00', status: true },
                        { id_time: 12, value: '15:30', status: true },
                        { id_time: 13, value: '16:00', status: true },
                        { id_time: 14, value: '16:30', status: true },
                        { id_time: 15, value: '17:00', status: true },

                    ]
                },

            ]
        },

    ])
    function handleDate(e) {
        console.log(e.target.value);
        const dataDate = solutionListTime(e.target.value);
        const dataTime = dataDate[0].listtime;
        setDataTime(dataTime);
    }
    function solutionListTime(date) {
        return data[0].listdate.filter((item) => {
            return item.value === date;
        })
    }
    function handleClickTime(e) {
        setDataIdTime(e.target.id);
        console.log("123");


    }
    function handletuvan() {


        setData(data[0].listdate[0].listtime[0].status = false);
    }

    console.log(data);
    return (
        <div className="time">
            <div className="pick-time">
                <h5>Lịch tư vấn trực tuyến</h5>
                <div><input type="date" onChange={handleDate}></input></div>
                <div>
                    {dataTime.map((item, index) => (
                        <button className='picktime' key={index} id={item.id_time} onClick={handleClickTime}>{item.value}</button>
                        // <div className='picktime' key={index} id={item.id_time} onClick={handleClickTime}>
                        //   {item.value}
                        // </div>

                    )
                    )}


                </div>
                <button className='save' onClick={handletuvan} ><i class="fas fa-video"></i>Tư vấn trực tuyến</button>


            </div>
        </div>
    )
}
export default Picktime;