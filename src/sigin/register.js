
/* eslint-disable react/jsx-pascal-case */
import React,{useState} from 'react'
import Input_item from './components/Input_item'
import "./components/index.css"


function Register () {
    const [role,setRole] = useState("use")
    const [classDiv,setClassDiv] = useState('use_register')
    const x =(e)=>{
        setRole(e.target.value) 
        // setClassDiv("use_register")
    }
    const y =(e)=>{
        setRole(e.target.value) 
        // setClassDiv("doctor_register")
    }
    return (
        <div>
            <form>

                <label>
                Người dùng
                <input type="radio"
                        value='use'
                        checked = {role==="use"}
                        name='role'
                        onChange={x}

                        >
                 </input>
                </label>
                 <label>
                 Bác sĩ
                 <input type="radio"
                        value='doctor'
                        checked = {role==="doctor"}
                        onChange={y}
                        >
                 </input>
                 </label>   
            <Input_item type="text" labelText="Tên đăng nhập"/>
            <Input_item type="password" labelText="Mật khẩu"/>
            <Input_item type="password" labelText="Xác nhận lại mật khẩu "/>
            {/* <Input_item type="text" labelText="Tên"/>
            <Input_item type="text" labelText="tuổi"/> */}
            <div className={classDiv}>
            <Input_item type="text" labelText="Bệnh viện công tác"/>
            <Input_item type="text" labelText="Chuyên khoa"/>
            <Input_item type="text" labelText="Học vị"/>
            <Input_item type="text" labelText="Số năm công tác trong ngành"/>
            </div>
            <button type='submit'>đăng ký</button>
            </form>
            </div>
        
    )
}
export default Register
