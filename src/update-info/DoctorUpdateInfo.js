import React, { useEffect, useRef, useState, useContext } from "react";
import "./DoctorUpdateInfo.scss";
import updateApi from "../api/updateApi";
import Context from "../store/Context";
function DoctorUpdateInfo() {
  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);
  const [dataDoctor, setDataDoctor] = useState({});
  const [dataUser, setDataUser] = useContext(Context);
  const id = dataUser.id;

  useEffect(() => {
    const fetchUpdate = async () => {
      await updateApi.get(id).then((res) => {
        nameValueInput.current.value = res.data.name;
        emailValueInput.current.value = res.data.email;
        hospitalValueInput.current.value = res.data.hospital;
        majorValueInput.current.value = res.data.major;
        degreeValueInput.current.value = res.data.degree;
        expValueInput.current.value = res.data.exp;
        timeValueInput.current.value = res.data.time;
      });
    };
    fetchUpdate();
  }, []);

  function handleUpdate() {
    const data = {
      id: dataUser.id,
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
    });
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

        <form>
          <div className="form-header">
            <div className="form-header_avatar"></div>
            <h3 className="form-header_name">Tài khoản : {dataUser.username}</h3>
            <p className="form-header_role">{dataUser.role}</p>
          </div>
          <div className="form-content">
            <div className="form-content_nameDoctor">
              <label>Họ và tên</label>
              <input
                type="text"
                ref={nameValueInput}
                // value={dataDoctor.name}
              />
            </div>
            <div className="form-content_emailDoctor">
              <label>Email</label>
              <input
                type="text"
                ref={emailValueInput}
                // value={dataDoctor.email}
              />
            </div>
            <div className="form-content_hospital">
              <label>Bệnh viên</label>
              <input
                type="text"
                ref={hospitalValueInput}
                // value={dataDoctor.hospital}
              />
            </div>
            <div className="form-content_major">
              <label>Chuyên khoa</label>
              <select
                ref={majorValueInput}
                //  value={dataDoctor.major}
              >
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
              <input
                type="text"
                ref={degreeValueInput}
                // value={dataDoctor.degree}
              />
            </div>
            <div className="form-content_exp">
              <label>Năm kinh nghiệm</label>
              <input
                type="text"
                ref={expValueInput}
                //  value={dataDoctor.exp}
              />
            </div>
            <div className="form-content_time">
              <label>Thời lượng tư vấn</label>
              <input
                type="text"
                ref={timeValueInput}
                // value={dataDoctor.time}
              />
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
    </>
  );
}

export default DoctorUpdateInfo;
