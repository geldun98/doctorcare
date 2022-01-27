import React from 'react';

const ItemHistory = ({ data, role }) => {
  console.log(data);
  return (
    <div className="ItemHistory">
      {role === 'user' && <div className="ItemHistory-name">{data.name_doctor}</div>}
      {role === 'doctor' && <div className="ItemHistory-name">{data.username}</div>}

      <div className="ItemHistory-date">{data.date}</div>
      <div className="ItemHistory-time">{data.time}</div>
    </div>
  );
};

export default ItemHistory;
