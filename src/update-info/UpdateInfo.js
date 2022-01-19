import React from 'react';
import DoctorUpdateInfo from './DoctorUpdateInfo';
import UserUpdateInfo from './UserUpdateInfo';
import { useState, useContext} from 'react';
import './UpdateInfo.scss'
import Context from '../store/Context';
function UpdateInfo(){
    const [checkDoctor, setCheckDoctor] = useState(true)
    const [dataUser, setDataUser] = useContext();
    // const checkDoctor = true
    let role = dataUser.role;
    if(role === 'doctor'){
        role =true;
    }
    function handleChange(){
        setCheckDoctor(!checkDoctor)
    }
    return(
        <>
        <div className='update'>
          {checkDoctor && <button onClick={handleChange} className='btn-change'>User</button>}
          {!checkDoctor && <button onClick={handleChange} className='btn-change'>Doctor</button>}
           { role && <DoctorUpdateInfo></DoctorUpdateInfo> }
           { !role && <UserUpdateInfo></UserUpdateInfo> }
        </div>
        </>
    )
     
}

export default UpdateInfo