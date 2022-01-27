import React, { useEffect, useRef, useState, useContext } from "react";
import "./UserUpdateInfo.scss";
import "./DoctorUpdateInfo.scss";
import updateApi from "../api/updateApi";
import Context from "../store/Context";
import { getImageListItemBarUtilityClass } from "@mui/material";
function UserUpdateInfo() {
  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);
  const [dataUsers, setDataUsers] = useState({});
  const [dataUser, setDataUser] = useContext(Context);
  const id = dataUser.id;

  useEffect(() => {
    const fetchUpdate = async () => {
      if (id) {
        await updateApi.get(id).then((res) => {
          if (res.data.name) {
            nameValueInput.current.value = res.data.name;
          }
          if (res.data.email) {
            emailValueInput.current.value = res.data.email;
          }
          if (res.data.dob) {
            dobValueInput.current.value = res.data.dob;
          }
          if (res.data.gender) {
            genderValueInput.current.value = res.data.gender;
          }
          if (res.data.phone) {
            phoneValueInput.current.value = res.data.phone;
          }
          if (res.data.address) {
            addressValueInput.current.value = res.data.address;
          }
          if (res.data.Job) {
            jobValueInput.current.value = res.data.Job;
          }
        });
      }
    };
    fetchUpdate();
  }, [id]);

  function handleUpdate() {
    const data = {
      id: dataUser.id,
      name: nameValueInput.current.value,
      email: emailValueInput.current.value,
      dob: dobValueInput.current.value,
      gender: genderValueInput.current.value,
      phone: phoneValueInput.current.value,
      address: addressValueInput.current.value,
      Job: jobValueInput.current.value,
    };
    if (
      (nameValueInput.current.value !== "") &
      (emailValueInput.current.value !== "") &
      (dobValueInput.current.value !== "") &
      (genderValueInput.current.value !== "") &
      (phoneValueInput.current.value !== "") &
      (addressValueInput.current.value !== "") &
      (jobValueInput.current.value !== "")
    ) {
      updateApi.update(data).then((res) => {
        if (res.status) {
          setResult(true);
        } else setReject(true);
      });
    } else {
      setReject(true);
    }
    if (nameValueInput.current.value === "") {
      errorName.current.classList.remove("errormsg_none");
      errorName.current.classList.add("errormsg_block");
    }
    if (
      emailValueInput.current.value === "" ||
      !validateEmail(emailValueInput.current.value)
    ) {
      errorEmail.current.classList.remove("errormsg_none");
      errorEmail.current.classList.add("errormsg_block");
    }
    if (dobValueInput.current.value === "") {
      errorDob.current.classList.remove("errormsg_none");
      errorDob.current.classList.add("errormsg_block");
    }
    if (genderValueInput.current.value === "") {
      errorGender.current.classList.remove("errormsg_none");
      errorGender.current.classList.add("errormsg_block");
    }
    if (
      phoneValueInput.current.value === "" ||
      !validatephone(phoneValueInput.current.value)
    ) {
      errorPhone.current.classList.remove("errormsg_none");
      errorPhone.current.classList.add("errormsg_block");
    }
    if (addressValueInput.current.value === "") {
      errorAddress.current.classList.remove("errormsg_none");
      errorAddress.current.classList.add("errormsg_block");
    }
    if (jobValueInput.current.value === "") {
      errorJob.current.classList.remove("errormsg_none");
      errorJob.current.classList.add("errormsg_block");
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const validatephone = (str) => {
    return /^(1\s|1|)?((\(\d{3}\))|\d{3})(\-|\s)?(\d{3})(\-|\s)?(\d{4})$/.test(
      str
    );
  };

  const handleFocusInput = () => {
    setReject(false);
    setResult(false);
    errorName.current.classList.add("errormsg_none");
    errorName.current.classList.remove("errormsg_block");
    errorEmail.current.classList.add("errormsg_none");
    errorEmail.current.classList.remove("errormsg_block");
    errorDob.current.classList.add("errormsg_none");
    errorDob.current.classList.remove("errormsg_block");
    errorGender.current.classList.add("errormsg_none");
    errorGender.current.classList.remove("errormsg_block");
    errorPhone.current.classList.add("errormsg_none");
    errorPhone.current.classList.remove("errormsg_block");
    errorAddress.current.classList.add("errormsg_none");
    errorAddress.current.classList.remove("errormsg_block");
    errorJob.current.classList.add("errormsg_none");
    errorJob.current.classList.remove("errormsg_block");
  };

  const nameValueInput = useRef();
  const emailValueInput = useRef();
  const dobValueInput = useRef();
  const genderValueInput = useRef();
  const phoneValueInput = useRef();
  const addressValueInput = useRef();
  const jobValueInput = useRef();
  const errorName = useRef();
  const errorEmail = useRef();
  const errorDob = useRef();
  const errorGender = useRef();
  const errorPhone = useRef();
  const errorAddress = useRef();
  const errorJob = useRef();
  return (
    <div className="form_update">
      <form className="form_update_main">
        <h1>SỬA THÔNG TIN CÁ NHÂN</h1>
        <div className="form-header">
          <h3 className="form-header_name">Tài khoản : {dataUser.username}</h3>
          <p className="form-header_role">{dataUser.role}</p>
        </div>
        <div className="form-content">
          <div className="form-content_name">
            <label>Họ và tên</label>
            <input
              type="text"
              ref={nameValueInput}
              onFocus={handleFocusInput}
            />
            <p className="errormsg_none errname " ref={errorName}>
              Vui lòng nhập họ tên!
            </p>
          </div>
          <div className="form-content_email">
            <label>Email</label>
            <input
              type="text"
              ref={emailValueInput}
              onFocus={handleFocusInput}
            />
            <p className="errormsg_none" ref={errorEmail}>
              Vui lòng nhập email!
            </p>
          </div>
          <div className="form-content_dob">
            <label>Ngày sinh</label>
            <input type="date" ref={dobValueInput} onFocus={handleFocusInput} />
            <p className="errormsg_none" ref={errorDob}>
              Vui lòng nhập ngày sinh!
            </p>
          </div>
          <div className="form-content_gender">
            <label>Giới tính</label>
            <select ref={genderValueInput} onFocus={handleFocusInput}>
              <option>Chọn giới tính</option>
              <option>Nam</option>
              <option>Nữ</option>
              <option>Khác</option>
            </select>
            <p className="errormsg_none" ref={errorGender}>
              Vui lòng chọn giới tính!
            </p>
          </div>
          <div className="form-content_phone">
            <label>Số điện thoại</label>
            <input
              type="text"
              ref={phoneValueInput}
              onFocus={handleFocusInput}
            />
            <p className="errormsg_none" ref={errorPhone}>
              Vui lòng nhập số điện thọa!
            </p>
          </div>
          <div className="form-content_address">
            <label>Địa chỉ</label>
            <input
              type="text"
              ref={addressValueInput}
              onFocus={handleFocusInput}
            />
            <p className="errormsg_none" ref={errorAddress}>
              Vui lòng nhập địa chỉ!
            </p>
          </div>
          <div className="form-content_job">
            <label>Nghề nghiệp</label>
            <input type="text" ref={jobValueInput} onFocus={handleFocusInput} />
            <p className="errormsg_none" ref={errorJob}>
              Vui lòng nhập nghề nghiệp!
            </p>
          </div>
          <div className="btn">
            <button type="button" onClick={handleUpdate}>
              Lưu
            </button>
            <button type="reset">Hủy</button>
          </div>
          {result && (
            <p
              className="update-success"
              style={{ color: "green", marginLeft: "20px" }}
            >
              Update thành công!
            </p>
          )}
          {reject && (
            <p
              className="update-fail"
              style={{ color: "red", marginLeft: "20px" }}
            >
              Update thất bại!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserUpdateInfo;
