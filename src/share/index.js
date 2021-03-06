import React, { useState, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import ListPost from './ListPost';
import DetailPost from './DetailPost';
import CreatePost from '../createpost';
import './style.scss';
import Context from '../store/Context';
const Share = () => {
  const [showButton, setShowButton] = useState(true);
  const [dataUser, setDataUser] = useContext(Context);
  let role = dataUser.role;
  let checkShow = false;
  if (role === 'doctor') {
    checkShow = true;
  }
  return (
    <div className="Share">
      <Routes>
        <Route
          path="/"
          element={
            <div>
              {checkShow && (
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
              )}
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
