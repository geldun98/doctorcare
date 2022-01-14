/* eslint-disable react/jsx-pascal-case */
import React from 'react'
import Input_item from './components/Input_item'
import "./components/index.css"

function Register () {
    return (
            <div>
                <form>
            <Input_item type="radio" labelText="Người dùng" name="role" value="use"  />
            <Input_item type="radio" labelText="bác sĩ" name="role" value='doctor' />
                </form>
            <Input_item type="email" labelText="Email" onMouseEnter={console.log("ádasd")} />
            <Input_item type="password" labelText="Mật khẩu"/>
            <Input_item type="password" labelText="Xác nhận lại mật khẩu "/>
            <Input_item type="text" lavelText="Tên"/>
            <Input_item type="text" labelText="tuổi"/>
            <div className="doctor_register">
            <Input_item type="text" labelText="Bệnh viện công tác"/>
            <Input_item type="text" labelText="Chuyên khoa"/>
            <Input_item type="text" labelText="Học vị"/>
            <Input_item type="text" labelText="Số năm công tác trong ngành"/>
            </div>
            <button type='submit'>đăng ký</button>
            </div>
        
    )
}
export default Register
