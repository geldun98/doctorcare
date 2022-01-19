import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListPost from './ListPost';
import DetailPost from './DetailPost';
import CreatePost from '../createpost';
import './style.scss';
const Share = () => {
  const [showButton, setShowButton] = useState(true);
  return (
    <div className="Share">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="createpost">
                <button
                  className="Share-create"
                  onClick={() => {
                    setShowButton(!showButton);
                  }}
                >
                  Tạo bài viết
                </button>
              </Link>
              <ListPost></ListPost>
            </div>
          }
        ></Route>
        <Route path="detailpost" element={<DetailPost></DetailPost>}></Route>
        <Route path="createpost" element={<CreatePost></CreatePost>}></Route>
      </Routes>
    </div>
  );
};

export default Share;
