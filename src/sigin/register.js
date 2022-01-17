
/* eslint-disable react/jsx-pascal-case */
import React,{useState} from 'react'
import Input_item from './components/Input_item'
import "./components/index.scss"


function Register () {
    const [role,setRole] = useState("use")
    // const [classDiv,setClassDiv] = useState('use_register')
    const use =(e)=>{
        setRole(e.target.value) 
        // setClassDiv("use_register")
    }
    const doctor =(e)=>{
        setRole(e.target.value) 
        // setClassDiv("doctor_register")
    }
    return (
        <div className='link2'>
            <form >
                <div className='classdiv'>
                <div >
                <label>
                Người dùng
                <input type="radio"
                        value='use'
                        checked = {role==="use"}
                        onChange={use}
                        >
                 </input>
                </label>
                </div>
                <div >
                 <label>
                 Bác sĩ
                 <input type="radio"
                        value='doctor'
                        checked = {role==="doctor"}
                        onChange={doctor}
                        >
                 </input>
                 </label>   
                </div>
                </div>
            <Input_item type="text" labelText="Tên đăng nhập" errlabel='ádasdasd'/>
            <Input_item type="password" labelText="Mật khẩu" errlabel='ádasdasd'/>
            <Input_item type="password" labelText="Xác nhận lại mật khẩu "errlabel='ádasdasd' />
            <Input_item type="text" labelText="Họ và tên" errlabel='ádasdasd'/>
            <Input_item type="text" labelText="tuổi" errlabel='ádasdasd' />
            {/* <div className={classDiv}>
            <Input_item type="text" labelText="Bệnh viện công tác"/>
            <Input_item type="text" labelText="Chuyên khoa"/>
            <Input_item type="text" labelText="Học vị"/>
            <Input_item type="text" labelText="Số năm công tác trong ngành"/>
            </div> */}
            <button type='submit'>đăng ký</button>
            </form>
            </div>
        
    )
}
export default Register
