import React from 'react';
import DoctorUpdateInfo from './DoctorUpdateInfo';
import UserUpdateInfo from './UserUpdateInfo';
import { useState, useContext} from 'react';
import './UpdateInfo.scss'
import Context from '../store/Context';
function UpdateInfo(){
    const [checkDoctor, setCheckDoctor] = useState(true)
    const [dataUser, setDataUser] = useContext(Context);
    // const checkDoctor = true
    let role = dataUser.role;
    console.log(role);
    if(role === 'doctor'){
        role = true;
    }
    function handleChange(){
        setCheckDoctor(!checkDoctor)
    }
    return(
        <>
        <div className='update'>
          {role && <button onClick={handleChange} className='btn-change'>User</button>}
          {!role && <button onClick={handleChange} className='btn-change'>Doctor</button>}
           { role && <DoctorUpdateInfo></DoctorUpdateInfo> }
           { !role && <UserUpdateInfo></UserUpdateInfo> }
        </div>
        </>
    )
     
}

export default UpdateInfo