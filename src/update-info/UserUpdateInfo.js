import React, { useEffect, useRef, useState, useContext } from "react";
import "./UserUpdateInfo.scss";
import "./DoctorUpdateInfo.scss";
import updateApi from "../api/updateApi";
import Context from "../store/Context";
function UserUpdateInfo() {
  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);
  const [dataUsers, setDataUsers] = useState({});
  const [dataUser, setDataUser] = useContext(Context);
  const id = dataUser.id;

  useEffect(() => {
    const fetchUpdate = async () => {
      await updateApi.get(id).then((res) => {
        nameValueInput.current.value = res.data.name;
        emailValueInput.current.value = res.data.email;
        dobValueInput.current.value = res.data.dob;
        genderValueInput.current.value = res.data.gender;
        phoneValueInput.current.value = res.data.phone;
        addressValueInput.current.value = res.data.address;
        jobValueInput.current.value = res.data.job;
      });
    };
    fetchUpdate();
  }, []);

  function handleUpdate() {
    const data = {
      id: dataUsers.id,
      name: nameValueInput.current.value,
      email: emailValueInput.current.value,
      dob: dobValueInput.current.value,
      gender: genderValueInput.current.value,
      phone: phoneValueInput.current.value,
      address: addressValueInput.current.value,
      Job: jobValueInput.current.value,
    };
    updateApi.update(data).then((res) => {
      if (res.status) {
        setResult(true);
      } else setReject(true);
    });
  }

  const nameValueInput = useRef();
  const emailValueInput = useRef();
  const dobValueInput = useRef();
  const genderValueInput = useRef();
  const phoneValueInput = useRef();
  const addressValueInput = useRef();
  const jobValueInput = useRef();
  return (
    <div className="form">
      <h1>SỬA THÔNG TIN CÁ NHÂN</h1>

      <form>
        <div className="form-header">
          <div className="form-header_avatar"></div>
          <h3 className="form-header_name">Tài khoản : {dataUser.username}</h3>
          <p className="form-header_role">{dataUser.role}</p>
        </div>
        <div className="form-content">
          <div className="form-content_name">
            <label>Họ và tên</label>
            <input type="text" ref={nameValueInput} />
          </div>
          <div className="form-content_email">
            <label>Email</label>
            <input type="text" ref={emailValueInput} />
          </div>
          <div className="form-content_dob">
            <label>Ngày sinh</label>
            <input type="date" ref={dobValueInput} />
          </div>
          <div className="form-content_gender">
            <label>Giới tính</label>
            <select ref={genderValueInput}>
              <option>Chọn giới tính</option>
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </div>
          <div className="form-content_phone">
            <label>Số điện thoại</label>
            <input type="text" ref={phoneValueInput} />
          </div>
          <div className="form-content_address">
            <label>Địa chỉ</label>
            <input type="text" ref={addressValueInput} />
          </div>
          <div className="form-content_job">
            <label>Nghề nghiệp</label>
            <input type="text" ref={jobValueInput} />
          </div>
          <div className="btn">
            <button type="button" onClick={handleUpdate}>
              Lưu
            </button>
            <button type="reset">Hủy</button>
          </div>
          {result && (
            <p className="update-success" style={{ color: "green" }}>
              Update thành công!
            </p>
          )}
          {reject && (
            <p className="update-fail" style={{ color: "red" }}>
              Update thất bại!
            </p>
          )}
        </div>
      </form>
    </div>
  );
}

export default UserUpdateInfo;
