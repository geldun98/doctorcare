/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Input_item from './components/Input_item'
function Sigin() {
  return <div>
            <Input_item type="Email" labelText="Email"/>
            <Input_item type="password" labelText="Mật khẩu"/>
            <button type='submit'>đăng nhập</button>
        </div>;
}
export default Sigin;
