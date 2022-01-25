import React from 'react';

const ItemHistory = ({ data }) => {
  return (
    <div className="ItemHistory">
      <div className="ItemHistory-name">{data.name_doctor}</div>
      <div className="ItemHistory-date">{data.date}</div>
      <div className="ItemHistory-time">{data.time}</div>
    </div>
  );
};

export default ItemHistory;
