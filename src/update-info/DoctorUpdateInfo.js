import React, { useEffect, useRef, useState, useContext } from 'react';
import './DoctorUpdateInfo.scss';
import updateApi from '../api/updateApi';
import Context from '../store/Context';
function DoctorUpdateInfo() {
  const [result, setResult] = useState(false);
  const [reject, setReject] = useState(false);
  const [dataDoctor, setDataDoctor] = useState({});
  const [dataUser, setDataUser] = useContext(Context);
  const id = dataUser.id;

  useEffect(() => {
    const fetchUpdate = async () => {
      await updateApi.get(id).then((res) => {
        if (res.data.name) nameValueInput.current.value = res.data.name;
        if (res.data.email) emailValueInput.current.value = res.data.email;
        if (res.data.hospital) hospitalValueInput.current.value = res.data.hospital;
        if (res.data.major) majorValueInput.current.value = res.data.major;
        if (res.data.degree) degreeValueInput.current.value = res.data.degree;
        if (res.data.exp) expValueInput.current.value = res.data.exp;
        if (res.data.time) timeValueInput.current.value = res.data.time;
      });
    };
    fetchUpdate();
  }, [id]);
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
    if (
      (nameValueInput.current.value !== '') &
      (emailValueInput.current.value !== '') &
      (hospitalValueInput.current.value !== '') &
      (majorValueInput.current.value !== '') &
      (degreeValueInput.current.value !== '') &
      (expValueInput.current.value !== '') &
      (timeValueInput.current.value !== '')
    ) {
      updateApi.update(data).then((res) => {
        console.log(res.status);
        if (res.status) {
          setResult(true);
        } else setReject(true);
      });
    } else {
      setReject(true);
    }
    if (nameValueInput.current.value === '') {
      errorName.current.classList.remove('errormsg_none');
      errorName.current.classList.add('errormsg_block');
    }
    if (emailValueInput.current.value === '' || !validateEmail(emailValueInput.current.value)) {
      errorEmail.current.classList.remove('errormsg_none');
      errorEmail.current.classList.add('errormsg_block');
    }
    if (hospitalValueInput.current.value === '') {
      errorHospital.current.classList.remove('errormsg_none');
      errorHospital.current.classList.add('errormsg_block');
    }
    if (majorValueInput.current.value === '') {
      errorMajor.current.classList.remove('errormsg_none');
      errorMajor.current.classList.add('errormsg_block');
    }
    if (degreeValueInput.current.value === '') {
      errorDegree.current.classList.remove('errormsg_none');
      errorDegree.current.classList.add('errormsg_block');
    }
    if (expValueInput.current.value === '' || isNaN(expValueInput.current.value)) {
      errorExp.current.classList.remove('errormsg_none');
      errorExp.current.classList.add('errormsg_block');
    }
    if (timeValueInput.current.value === '' || isNaN(timeValueInput.current.value)) {
      errorTime.current.classList.remove('errormsg_none');
      errorTime.current.classList.add('errormsg_block');
    }
  }

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const nameValueInput = useRef();
  const emailValueInput = useRef();
  const hospitalValueInput = useRef();
  const majorValueInput = useRef();
  const degreeValueInput = useRef();
  const expValueInput = useRef();
  const timeValueInput = useRef();
  const errorName = useRef();
  const errorEmail = useRef();
  const errorHospital = useRef();
  const errorMajor = useRef();
  const errorDegree = useRef();
  const errorExp = useRef();
  const errorTime = useRef();
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
              <input type="text" ref={nameValueInput} />
              <p className="errormsg_none errname " ref={errorName}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="form-content_emailDoctor">
              <label>Email</label>
              <input type="text" ref={emailValueInput} />
              <p className="errormsg_none errname " ref={errorEmail}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="form-content_hospital">
              <label>Bệnh viên</label>
              <input type="text" ref={hospitalValueInput} />
              <p className="errormsg_none errname " ref={errorHospital}>
                Vui lòng nhập họ tên!
              </p>
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
              <p className="errormsg_none errname " ref={errorMajor}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="form-content_degree">
              <label>Học vị</label>
              <input type="text" ref={degreeValueInput} />
              <p className="errormsg_none errname " ref={errorDegree}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="form-content_exp">
              <label>Năm kinh nghiệm</label>
              <input type="text" ref={expValueInput} />
              <p className="errormsg_none errname " ref={errorExp}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="form-content_time">
              <label>Thời lượng tư vấn</label>
              <input type="text" ref={timeValueInput} />
              <p className="errormsg_none errname " ref={errorTime}>
                Vui lòng nhập họ tên!
              </p>
            </div>
            <div className="btn">
              <button type="button" onClick={handleUpdate}>
                Lưu
              </button>
              <button type="reset">Hủy</button>
            </div>
            {result && (
              <p className="update-success" style={{ color: 'green', marginLeft: '20px' }}>
                Update thành công!
              </p>
            )}
            {reject && (
              <p className="update-fail" style={{ color: 'red', marginLeft: '20px' }}>
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
