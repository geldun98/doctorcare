import React from 'react'
import Input_item from './components/Input_item'
function Register () {
    return (
            <div>
            {Input_item("text","Tên đăng nhập")}
            {Input_item("email","Email")}
            {Input_item("password","Mật khẩu")}
            <button type='submit'>đăng ký</button>
            </div>
        
    )
}

export default Register
