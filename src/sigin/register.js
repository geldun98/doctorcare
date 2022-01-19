/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef } from "react";
import Input_item from "./components/Input_item";
import "./components/index.scss";
function Register() {
  const [role, setRole] = useState("use");
  // const [classDiv,setClassDiv] = useState('use_register')
  const use = (e) => {
    setRole(e.target.value);
    // setClassDiv("use_register")
  };
  const doctor = (e) => {
    setRole(e.target.value);
    // setClassDiv("doctor_register")
  };
  // điều kiện dể submit
  const [classNameSpanInput, setclassNameSpanInput] = useState("err_span_none");
  const [classNameSpanPassword, setclassNameSpanPassword] =
    useState("err_span_none");
  const [classNameSpanconfirmpassword, setclassNameSpanconfirmpassword] =
    useState("err_span_none");
  const [classNameSpanfullname, setclassNameSpanfullname] =
    useState("err_span_none");
  const [classNameSpanage, setclassNameSpanage] = useState("err_span_none");

  const nameInput = useRef();
  const passwordInput = useRef();
  const confirmpasswordInput = useRef();
  const fullnameInput = useRef();
  const ageInput = useRef();
  const data = {
    name: "",
    password: "",
    role: "",
  };
  const handclick = (even) => {
    even.preventDefault();
    if (
      nameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      confirmpasswordInput.current.value !== "" &&
      fullnameInput.current.value !== "" &&
      ageInput.current.value !==""
    ) {
      data["username"] = nameInput.current.value;
      data["password"] = passwordInput.current.value;
      data["role"] = role;
      console.log(data);
    }
    if (nameInput.current.value === "") {
      setclassNameSpanInput("err_span_block");
    }
    if (passwordInput.current.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
    if (confirmpasswordInput.current.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
    }
    if (fullnameInput.current.value === "") {
      setclassNameSpanfullname("err_span_block");
    }
    if (ageInput.current.value === "") {
      setclassNameSpanage("err_span_block");
    }
  };

  const onBlurEven = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name" && e.target.value === "") {
      setclassNameSpanInput("err_span_block");
    }
    if (e.target.name === "password" && e.target.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
    if (e.target.name === "confirmpassword" && e.target.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
    }
    if (e.target.name === "fullname" && e.target.value === "") {
      setclassNameSpanfullname("err_span_block");
    }
    if (e.target.name === "age" && e.target.value === "") {
      setclassNameSpanage("err_span_block");
    }
  };

  const onFocusEven = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name") {
      setclassNameSpanInput("err_span_none");
    }
    if (e.target.name === "password") {
      setclassNameSpanPassword("err_span_none");
    }
    if (e.target.name === "confirmpassword") {
      setclassNameSpanconfirmpassword("err_span_none");
    }
    if (e.target.name === "fullname") {
      setclassNameSpanfullname("err_span_none");
    }
    if (e.target.name === "age") {
      setclassNameSpanage("err_span_none");
    }
  };

  return (
    <div>
      <form className="form_main">
        <div className="radio_input_group">
          <div>
            <label>Người dùng</label>
            <input
              type="radio"
              value="use"
              checked={role === "use"}
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

        <Input_item
          type="text"
          labelText="Tên đăng nhập"
          className="input_group"
          Ref={nameInput}
          name="name"
          classNameSpan={classNameSpanInput}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
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
        <Input_item
          type="text"
          labelText="Họ và tên"
          className="input_group"
          name="fullname"
          Ref={fullnameInput}
          classNameSpan={classNameSpanfullname}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        <Input_item
          type="number"
          labelText="Tuổi"
          className="input_group"
          name="age"
          Ref={ageInput}
          classNameSpan={classNameSpanage}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
        />
        {/* <div className={classDiv}>
            <Input_item type="text" labelText="Bệnh viện công tác"/>
            <Input_item type="text" labelText="Chuyên khoa"/>
            <Input_item type="text" labelText="Học vị"/>
            <Input_item type="text" labelText="Số năm công tác trong ngành"/>
            </div> */}
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng ký
        </button>
      </form>
    </div>
  );
}
export default Register;
