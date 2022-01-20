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
  console.log(dataUser.id);

  useEffect(() => {
    const fetchUpdate = async () => {
      await updateApi.get(id).then((res) => {
        setDataUsers(res.data);
      });
    };
    fetchUpdate();
  }, []);

  function handleUpdate() {
    const data = {
      id: "1",
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
      {result && <p className="update-success" style={{ color: "green" }}>Update thành công!</p>}
      {reject && <p className="update-fail" style={{ color: "red" }}>Update thất bại!</p>}
      <form>
        <div className="form-header">
          <div className="form-header_avatar"></div>
          <h3 className="form-header_name">{dataUsers.name}</h3>
          <p className="form-header_role">{dataUser.role}</p>
        </div>
        <div className="form-content">
          <div className="form-content_name">
            <label>Họ và tên</label>
            <input type="text" ref={nameValueInput} value={dataUsers.name} />
          </div>
          <div className="form-content_email">
            <label>Email</label>
            <input type="text" ref={emailValueInput} value={dataUsers.email} />
          </div>
          <div className="form-content_dob">
            <label>Ngày sinh</label>
            <input type="date" ref={dobValueInput} value={dataUsers.dob} />
          </div>
          <div className="form-content_gender">
            <label>Giới tính</label>
            <select ref={genderValueInput} value={dataUsers.gender}>
              <option>Chọn giới tính</option>
              <option>Nam</option>
              <option>Nữ</option>
            </select>
          </div>
          <div className="form-content_phone">
            <label>Số điện thoại</label>
            <input type="text" ref={phoneValueInput} value={dataUsers.phone} />
          </div>
          <div className="form-content_address">
            <label>Địa chỉ</label>
            <input
              type="text"
              ref={addressValueInput}
              value={dataUsers.address}
            />
          </div>
          <div className="form-content_job">
            <label>Nghề nghiệp</label>
            <input type="text" ref={jobValueInput} value={dataUsers.job} />
          </div>
          <div className="btn">
            <button type="button" onClick={handleUpdate}>
              Lưu
            </button>
            <button type="reset">Hủy</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default UserUpdateInfo;
