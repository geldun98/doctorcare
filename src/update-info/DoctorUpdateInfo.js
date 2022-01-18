import React, { useEffect, useRef, useState } from "react";
import "./DoctorUpdateInfo.scss";
import updateApi from "../api/updateApi";
function DoctorUpdateInfo() {

  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);

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
    updateApi.update(data).then((res) => {
      console.log(res.status);
      if (res.status) {
        setResult(true);
      } else setReject(true);
    });;
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
      <div className="form">
      <h1>SỬA THÔNG TIN BÁC SĨ</h1>
      {result && <p>Update thanh cong</p>}
      {reject && <p>Update that bai</p>}
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
                <option>Tai mũi họng</option>
                <option>Nội tiết</option>
                <option>Nhi</option>
                <option>Mắt</option>
                <option>Hô hấp</option>
                <option>Nội tổng hợp</option>
                <option>Da liễu</option>
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
