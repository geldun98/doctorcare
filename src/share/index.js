import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import './style.scss';
const Share = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="Share">
      <Link to="/createpost">
        <button
          className="Share-create"
          onClick={() => {
            setShowButton(!showButton);
          }}
        >
          Tạo bài viết
        </button>
      </Link>
    </div>
  );
};

export default Share;
