import React, { useEffect, useRef, useState } from 'react';
import './UserUpdateInfo.scss';
import './DoctorUpdateInfo.scss';
import updateApi from '../api/updateApi';
function UserUpdateInfo() {
  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);

  const author = 'Xuân Hiếu';
  const role = 'Chủ tài khoản';

  useEffect(() => {
    const fetchUpdate = async () => {
      const listApi = await updateApi.getAll();
    };
    fetchUpdate();
  }, []);

  function handleUpdate() {
    const data = {
      id: '1',
      name: nameValueInput.current.value,
      email: emailValueInput.current.value,
      dob: dobValueInput.current.value,
      gender: genderValueInput.current.value,
      phone: phoneValueInput.current.value,
      address: addressValueInput.current.value,
      Job: jobValueInput.current.value,
    };
    updateApi.update(data).then((res) => {
      console.log(res.status);
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
      {result && <p>Update thanh cong</p>}
      {reject && <p>Update that bai</p>}

      <form>
        <div className="form-header">
          <div className="form-header_avatar"></div>
          <h3 className="form-header_name">{author}</h3>
          <p className="form-header_role">{role}</p>
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
        </div>
      </form>
    </div>
  );
}

export default UserUpdateInfo;
