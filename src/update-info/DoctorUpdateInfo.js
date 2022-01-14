import React, { useEffect, useRef } from "react";
import "./DoctorUpdateInfo.css";
import updateApi from "../api/updateApi";
function DoctorUpdateInfo() {
  const author = "Xuân Hiếu";

  const role2 = "Bác sĩ";

  useEffect(() => {
    const fetchUpdate = async () => {
      const listApi = await updateApi.getAll();
    };
    fetchUpdate();
  }, []);

  function handleUpdate() {
    const data = {
      id: "2",
      name: nameValueInput.current.value,
      email: emailValueInput.current.value,
      hospital: hospitalValueInput.current.value,
      major: majorValueInput.current.value,
      degree: degreeValueInput.current.value,
      exp: expValueInput.current.value,
      time: timeValueInput.current.value,
    };
    updateApi.update(data);
  }

  const nameValueInput = useRef();
  const emailValueInput = useRef();
  const hospitalValueInput = useRef();
  const majorValueInput = useRef();
  const degreeValueInput = useRef();
  const expValueInput = useRef();
  const timeValueInput = useRef();
  return (
    <>
      <h1>SỬA THÔNG TIN BÁC SĨ</h1>
      <div className="form">
        <form>
          <div className="form-header">
            <div className="form-header_avatar"></div>
            <h3 className="form-header_name">{author}</h3>
            <p className="form-header_role">{role2}</p>
          </div>
          <div className="form-content">
            <div className="form-content_nameDoctor">
              <label>Họ và tên</label>
              <input type="text" ref={nameValueInput} />
            </div>
            <div className="form-content_emailDoctor">
              <label>Email</label>
              <input type="text" ref={emailValueInput}/>
            </div>
            <div className="form-content_hospital">
              <label>Bệnh viên</label>
              <input type="text" ref={hospitalValueInput}/>
            </div>
            <div className="form-content_major">
              <label>Chuyên khoa</label>
              <select ref={majorValueInput}>
                <option>Chọn chuyên khoa</option>
                <option>...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-content_degree">
              <label>Học vị</label>
              <input type="text" ref={degreeValueInput}/>
            </div>
            <div className="form-content_exp">
              <label>Năm kinh nghiệm</label>
              <input type="text" ref={expValueInput}/>
            </div>
            <div className="form-content_time">
              <label>Thời lượng tư vấn</label>
              <input type="text" ref={timeValueInput}/>
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
    </>
  );
}

export default DoctorUpdateInfo;
