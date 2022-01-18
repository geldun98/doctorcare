import React from 'react';
import DoctorUpdateInfo from './DoctorUpdateInfo';
import UserUpdateInfo from './UserUpdateInfo';
import { useState } from 'react';
import './UpdateInfo.scss'
function UpdateInfo(){
    const [checkDoctor, setCheckDoctor] = useState(true)
    // const checkDoctor = true
    function handleChange(){
        setCheckDoctor(!checkDoctor)
    }
    return(
        <>
        <div className='update'>
          {checkDoctor && <button onClick={handleChange} className='btn-change'>User</button>}
          {!checkDoctor && <button onClick={handleChange} className='btn-change'>Doctor</button>}
           { checkDoctor && <DoctorUpdateInfo></DoctorUpdateInfo> }
           { !checkDoctor && <UserUpdateInfo></UserUpdateInfo> }
        </div>
        </>
    )
     
}

export default UpdateInfo