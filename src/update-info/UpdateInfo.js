import React from "react";
import DoctorUpdateInfo from "./DoctorUpdateInfo";
import UserUpdateInfo from "./UserUpdateInfo";
import { useState, useContext } from "react";
import "./UpdateInfo.scss";
import Context from "../store/Context";
function UpdateInfo() {
  const [dataUser, setDataUser] = useContext(Context);
  let role = dataUser.role;
  let checkRole = false;
  if (role === "doctor") {
    checkRole = true;
  }
  return (
    <>
      <div className="update">
        {/* {role && <button onClick={handleChange} className='btn-change'>User</button>}
          {!role && <button onClick={handleChange} className='btn-change'>Doctor</button>} */}
        {checkRole && <DoctorUpdateInfo></DoctorUpdateInfo>}
        {!checkRole && <UserUpdateInfo></UserUpdateInfo>}
      </div>
    </>
  );
}

export default UpdateInfo;
