/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Input_item from './components/Input_item'
import './components/index.css'
function Sigin() {
  return <div>
            <form>
            <Input_item type="text" labelText="Tên Đăng nhập"  />
            <Input_item type="password" labelText="Mật khẩu" />
            <button type='submit'>đăng nhập</button>
            </form>
        </div>;
}
export default Sigin;



