/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef } from "react";
import Input_item from "./components/Input_item";
import "./components/index.scss";
import MilogioutApi from "./components/logoutAPIM";
import updateApi from "../api/updateApi";
function Register() {
  //Không cho tiếng việt vào ô name
  let specialCharacters = 0;
  function removeVietnameseTones(str) {
    str = str.trim();
    str = str.replace(/ /g, "");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/đ/g, "d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str;
  }
  // không nhập tiếng việt vào ô password
  function searchSpecialCharacters(valueinput) {
    let x =
      "à,á,ạ,ả,ã,â,ầ,ấ,ậ,ẩ,ẫ,ă,ằ,ắ,ặ,ẳ,ẵ,è,é,ẹ,ẻ,ẽ,ê,ề,ế,ệ,ể,ễ,ì,í,ị,ỉ,ĩ,ò,ó,ọ,ỏ,õ,ô,ồ,ố,ộ,ổ,ỗ,ơ,ờ,ớ,ợ,ở,ỡ,ù,ú,ụ,ủ,ũ,ư,ừ,ứ,ự,ử,ữ,ỳ,ý,ỵ,ỷ,ỹ,đ,À,Á,Ạ,Ả,Ã,Â,Ầ,Ấ,Ậ,Ẩ,Ẫ,Ă,Ằ,Ắ,Ặ,Ẳ,Ẵ,È,É,Ẹ,Ẻ,Ẽ,Ê,Ề,Ế,Ệ,Ể,Ễ,Ì,Í,Ị,Ỉ,Ĩ,Ò,Ó,Ọ,Ỏ,Õ,Ô,Ồ,Ố,Ộ,Ổ,Ỗ,Ơ,Ờ,Ớ,Ợ,Ở,Ỡ,Ù,Ú,Ụ,Ủ,Ũ,Ư,Ừ,Ứ,Ự,Ử,Ữ,Ỳ,Ý,Ỵ,Ỷ,Ỹ,Đ";
    let z = valueinput.split("");
    z.forEach((element) => {
      if (x.search(element) >= 0) {
        specialCharacters++;
      }
    });
  }
  // chọn role
  const [role, setRole] = useState("user");
  const [classDiv, setClassDiv] = useState("use_register");
  const use = (e) => {
    setRole(e.target.value);
    setClassDiv("use_register");
  };
  const doctor = (e) => {
    setRole(e.target.value);
    setClassDiv("doctor_register");
  };
  // điều kiện dể submit
  const [classNameSpanUserName, setclassNameSpanUserName] =
    useState("err_span_none");
  const [classNameSpanPassword, setclassNameSpanPassword] =
    useState("err_span_none");
  const [classNameSpanconfirmpassword, setclassNameSpanconfirmpassword] =
    useState("err_span_none");
  const [classNameSpanname, setclassNameSpanname] = useState("err_span_none");
  const [classNameSpanhospital, setclassNameSpanhospital] =
    useState("err_span_none");
  const [classNameSpanmajor, setclassNameSpanmajor] = useState("err_span_none");
  const [classNameSpandegree, setclassNameSpandegree] =
    useState("err_span_none");
  const [classNameSpanexp, setclassNameSpanexp] = useState("err_span_none");

  const spanErr = useRef();
  const spanErrvn = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const confirmpasswordInput = useRef();
  const nameInput = useRef();
  const hospitalInput = useRef();
  const majorInput = useRef();
  const degreeInput = useRef();
  const expInput = useRef();

  const data = {
    username: "",
    password: "",
    role: "",
  };

  // đẩy dữ liệu lên khi nhấn nút
  const handclick = (even) => {
    even.preventDefault();
    //khi có ký tự đặc biệt ở pas
    if (specialCharacters > 0) {
      spanErrvn.current.classList.remove("err_span_none");
      spanErrvn.current.classList.add("err_span_block");
    }
    // kiểm tra xem xác nhận và mật khẩu có trùng nhau ko
    if (confirmpasswordInput.current.value !== passwordInput.current.value) {
      spanErr.current.innerHTML =
        "Xác nhận mật khẩu và mật khẩu không trùng nhau , vui lòng nhập lại";
      spanErr.current.classList.remove("err_span_none");
      spanErr.current.classList.add("err_span_block");
    }
    //kiểm tra các ô input có bị trống ko
    if (usernameInput.current.value === "") {
      setclassNameSpanUserName("err_span_block");
    }
    if (passwordInput.current.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
    if (confirmpasswordInput.current.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
    }
    if (hospitalInput.current.value === "") {
      setclassNameSpanhospital("err_span_block");
    }
    if (majorInput.current.value === "") {
      setclassNameSpanmajor("err_span_block");
    }
    if (degreeInput.current.value === "") {
      setclassNameSpandegree("err_span_block");
    }
    if (expInput.current.value === "") {
      setclassNameSpanexp("err_span_block");
    }
    if (nameInput.current.value === "") {
      setclassNameSpanname("err_span_block");
    }
    //chọn role user
    if (
      usernameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      confirmpasswordInput.current.value !== "" &&
      nameInput.current.value &&
      role === "user" &&
      specialCharacters === 0
    ) {
      console.log("đâs")
      data["username"] = usernameInput.current.value;
      data["password"] = passwordInput.current.value;
      data["role"] = role;

      MilogioutApi.add(data).then((res) => {
        if (res.status === 200) {
          const dataUpdate = {
            ...data,
            id: res.data,
            name: nameInput.current.value,
          };
          localStorage.setItem("user", JSON.stringify(dataUpdate));
          updateApi.add(dataUpdate).then((resUpdate) => {});
          window.location.assign("../trangchu");
        } else {
          spanErr.current.classList.remove("err_span_none");
          spanErr.current.classList.add("err_span_block");
        }
      });
    }
    //chọn role doctor
    if (
      usernameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      confirmpasswordInput.current.value !== "" &&
      nameInput.current.value &&
      hospitalInput.current.value !== "" &&
      majorInput.current.value !== "" &&
      degreeInput.current.value !== "" &&
      expInput.current.value !== "" &&
      role === "doctor" &&
      specialCharacters === 0
    ) {
      console.log("đâs123123")
      data["username"] = usernameInput.current.value;
      data["password"] = passwordInput.current.value;
      data["role"] = role;

      MilogioutApi.add(data).then((res) => {
        if (res.status === 200) {
          const dataUpdate = {
            ...data,
            id: res.data,
            hospital: hospitalInput.current.value,
            major: majorInput.current.value,
            degree: degreeInput.current.value,
            exp: expInput.current.value,
            name: nameInput.current.value,
          };
          localStorage.setItem("user", JSON.stringify(dataUpdate));
          updateApi.add(dataUpdate).then((resUpdate) => {});
          window.location.assign("../trangchu");
        } else {
          spanErr.current.classList.remove("err_span_none");
          spanErr.current.classList.add("err_span_block");
        }
      });
    }
  };
  //khi rời ô nhập
  const onBlurEven = (e) => {
    if (e.target.name === "username" && e.target.value === "") {
      setclassNameSpanUserName("err_span_block");
    }
    if (e.target.name === "username") {
      e.target.value = removeVietnameseTones(e.target.value);
    }
    if (e.target.name === "password" && e.target.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
    if (e.target.name === "password") {
      searchSpecialCharacters(e.target.value);
    }
    if (e.target.name === "confirmpassword" && e.target.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
    }
    if (e.target.name === "hospital" && e.target.value === "") {
      setclassNameSpanhospital("err_span_block");
    }
    if (e.target.name === "major" && e.target.value === "") {
      setclassNameSpanmajor("err_span_block");
    }
    if (e.target.name === "degree" && e.target.value === "") {
      setclassNameSpandegree("err_span_block");
    }
    if (e.target.name === "exp" && e.target.value === "") {
      setclassNameSpanexp("err_span_block");
    }
    if (e.target.name === "fullname" && e.target.value === "") {
      setclassNameSpanname("err_span_block");
    }
  };
  //khi ấn vào ô nhập
  const onFocusEven = (e) => {
    spanErr.current.classList.add("err_span_none");
    if (e.target.name === "username") {
      setclassNameSpanUserName("err_span_none");
    }
    if (e.target.name === "password") {
      setclassNameSpanPassword("err_span_none");
      spanErrvn.current.classList.add("err_span_none");
    }
    if (e.target.name === "confirmpassword") {
      setclassNameSpanconfirmpassword("err_span_none");
    }
    if (e.target.name === "hospital") {
      setclassNameSpanhospital("err_span_none");
    }
    if (e.target.name === "major") {
      setclassNameSpanmajor("err_span_none");
    }
    if (e.target.name === "degree") {
      setclassNameSpandegree("err_span_none");
    }
    if (e.target.name === "exp") {
      setclassNameSpanexp("err_span_none");
    }
    if (e.target.name === "fullname") {
      setclassNameSpanname("err_span_none");
    }
  };
  return (
    <div>
      <form className="form_main">
        {/* chọn role */}
        <div className="radio_input_group">
          <div>
            <label>Người dùng</label>
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={use}
            ></input>
          </div>
          <div>
            <label>Bác sĩ</label>
            <input
              type="radio"
              value="doctor"
              checked={role === "doctor"}
              onChange={doctor}
            ></input>
          </div>
        </div>
        {/* tên đăng nhập */}
        <Input_item
          type="text"
          labelText="Tên đăng nhập"
          className="input_group"
          Ref={usernameInput}
          name="username"
          classNameSpan={classNameSpanUserName}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        {/* mật khẩu */}
        <Input_item
          type="password"
          labelText="Mật khẩu"
          className="input_group"
          Ref={passwordInput}
          name="password"
          classNameSpan={classNameSpanPassword}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        {/* xác nhận mật khẩu */}
        <Input_item
          type="password"
          labelText="Xác nhận mật khẩu"
          className="input_group"
          Ref={confirmpasswordInput}
          name="confirmpassword"
          classNameSpan={classNameSpanconfirmpassword}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        {/* họ và tên */}
        <Input_item
          type="text"
          labelText="Họ và tên"
          className="input_group"
          Ref={nameInput}
          name="fullname"
          classNameSpan={classNameSpanname}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        <div className={classDiv}>
          {/* bệnh viện công tác */}
          <Input_item
            type="text"
            labelText="Bệnh viện công tác"
            className="input_group"
            Ref={hospitalInput}
            name="hospital"
            classNameSpan={classNameSpanhospital}
            onFocusEven={onFocusEven}
            onBlurEven={onBlurEven}
          />
          {/* chuyên khoa */}
          <div className="input_group">
            <label>Chuyên khoa</label>
            <select
              ref={majorInput}
              name="major"
              onFocus={onFocusEven}
              onBlur={onBlurEven}
            >
              <option value="">Chọn chuyên khoa </option>
              <option value="Tai Mũi Họng">Tai Mũi Họng</option>
              <option value="Nội Tiết">Nội Tiết</option>
              <option value="Nhi">Nhi</option>
              <option value="Mắt">Mắt</option>
              <option value="Hô Hấp">Hô Hấp</option>
              <option value="Nội Tổng Hợp">Nội Tổng Hợp</option>
              <option value="Da Liễu">Da Liễu</option>
            </select>
            <span className={classNameSpanmajor}>Vui lòng chọn đủ Chuyên khoa </span>
          </div>
          {/* học vị */}
          <div className="input_group">
            <label>Học vị</label>
            <select
              ref={degreeInput}
              name="degree"
              onFocus={onFocusEven}
              onBlur={onBlurEven}
            >
              <option value="">Chọn học vị </option>
              <option value="PGS.TS">PGS.TS</option>
              <option value="ThS">ThS</option>
              <option value="BSNT">BSNT</option>
              <option value="BS">BS</option>
              <option value="BSCKI">BSCKI</option>
            </select>
            <span className={classNameSpandegree}>Vui lòng chọn đủ Học vị </span>
          </div>
          {/* năm kinh nghiệm */}
          <Input_item
            type="number"
            labelText="Số năm công tác trong ngành"
            className="input_group"
            Ref={expInput}
            name="exp"
            classNameSpan={classNameSpanexp}
            onFocusEven={onFocusEven}
            onBlurEven={onBlurEven}
            min="1"
          />
        </div>
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng ký
        </button>
        {/* lỗi khi có ký tự đặc biệt  */}
        <span className="err_span_none" ref={spanErrvn}>
          Mật khẩu có chứa ký tự đặc biệt , vui lòng nhập lại mật khẩu
        </span>
        {/* lỗi khi không thể đăng ký */}
        <span className="err_span_none" ref={spanErr}>
          Đăng ký thất bại , tên đăng nhập đã tồn tại , vui lòng hãy tạo tên
          nhập mới nha :3
        </span>
      </form>
    </div>
  );
}
export default Register;
