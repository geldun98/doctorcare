import React from 'react';
import Input_item from './components/Input_item'
function Sigin() {
  return <div>
            {Input_item("text","Tên đăng nhập hoặc email")}
            {Input_item("password","Mật khẩu")}
            <button type='submit'>đăng nhập</button>
        </div>;
}
export default Sigin;
