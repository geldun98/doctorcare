/* eslint-disable react/jsx-pascal-case */
import React, { useState, useRef } from "react";
import Input_item from "./components/Input_item";
import "./components/index.scss";
import MilogioutApi from "./components/logoutAPIM";
import updateApi from "../api/updateApi";
function Register() {
  //Không cho tiếng việt vào ô input
  let specialCharacters = 0;
  function removeVietnameseTones(str) {
    str = str.trim();
    str = str.replace(/ /g, "");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
    str = str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
    str = str.replace(/đ/g,"d");
    str = str.replace(/À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ/g, "A");
    str = str.replace(/È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ/g, "E");
    str = str.replace(/Ì|Í|Ị|Ỉ|Ĩ/g, "I");
    str = str.replace(/Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ/g, "O");
    str = str.replace(/Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ/g, "U");
    str = str.replace(/Ỳ|Ý|Ỵ|Ỷ|Ỹ/g, "Y");
    str = str.replace(/Đ/g, "D");
    return str
  }
  // không nhập tiếng việt vào ô password
  
  const [role, setRole] = useState("user");
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
  // const [classNameSpanfullname, setclassNameSpanfullname] =
  //   useState("err_span_none");
  // const [classNameSpanage, setclassNameSpanage] = useState("err_span_none");

  const spanErr = useRef();
  const spanErrvn =  useRef();
  const nameInput = useRef();
  const passwordInput = useRef();
  const confirmpasswordInput = useRef();
  // const fullnameInput = useRef();
  // const ageInput = useRef();
  const data = {
    username: "",
    password: "",
    role: "",
  };
  
   const inputOnChange = (e) => {
    let x = [];
    let z =
      "à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ|è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ|ì|í|ị|ỉ|ĩ|ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ|ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ|ỳ|ý|ỵ|ỷ|ỹ|đ|À|Á|Ạ|Ả|Ã|Â|Ầ|Ấ|Ậ|Ẩ|Ẫ|Ă|Ằ|Ắ|Ặ|Ẳ|Ẵ|È|É|Ẹ|Ẻ|Ẽ|Ê|Ề|Ế|Ệ|Ể|Ễ|Ì|Í|Ị|Ỉ|Ĩ|Ò|Ó|Ọ|Ỏ|Õ|Ô|Ồ|Ố|Ộ|Ổ|Ỗ|Ơ|Ờ|Ớ|Ợ|Ở|Ỡ|Ù|Ú|Ụ|Ủ|Ũ|Ư|Ừ|Ứ|Ự|Ử|Ữ|Ỳ|Ý|Ỵ|Ỷ|Ỹ|Đ| ";
    let i = z.split("|");
    let y = e.target.value.split("");
    x[0] = y[y.length - 1];
    for (let c = 0; c < z.length; c++) {
      if (i[c] === x[0]) {
        specialCharacters++;
        break;
      }
    }}

  const handclick = (even) => {
    even.preventDefault();
    if (confirmpasswordInput.current.value !== passwordInput.current.value) {
        spanErr.current.innerHTML = "Xác nhận mật khẩu và mật khẩu không trùng nhau , vui lòng nhập lại";
        spanErr.current.classList.remove("err_span_none");
        spanErr.current.classList.add("err_span_block");
        return;
      }
    if (specialCharacters>0) {
      spanErrvn.current.classList.remove("err_span_none")
      spanErrvn.current.classList.add("err_span_block")
      specialCharacters = 0
      passwordInput.current.value = ""
      return;
    }
    if (nameInput.current.value === "") {
      setclassNameSpanInput("err_span_block");
      
    }
    if (passwordInput.current.value === "") {
      setclassNameSpanPassword("err_span_block");
    
    }
    if (confirmpasswordInput.current.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
      return;
    }
    if (
      nameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      confirmpasswordInput.current.value !== ""&& 
      specialCharacters === 0
      // fullnameInput.current.value !== "" &&
      // ageInput.current.value !== ""
      ) {
        data["username"] = nameInput.current.value;
        data["password"] = passwordInput.current.value;
        data["role"] = role;
        MilogioutApi.add(data).then((res) => {
          if (res.status === 200) {
            const dataUpdate = {
              ...data,
              id: res.data,
            };
            
            localStorage.setItem("user", JSON.stringify(dataUpdate));
            updateApi.add(dataUpdate).then((resUpdate) => {});
            window.location.assign("../trangchu");
          } else {
            spanErr.current.classList.remove("err_span_none");
            spanErr.current.classList.add("err_span_block");
            nameInput.current.value =""
            passwordInput.current.value =""
            confirmpasswordInput.current.value =""
          }
        });
      }
    // if (fullnameInput.current.value === "") {
    //   setclassNameSpanfullname("err_span_block");
    // }
    // if (ageInput.current.value === "") {
    //   setclassNameSpanage("err_span_block");
    // }
  };

  const onBlurEven = (e) => {
    e.target.value = removeVietnameseTones(e.target.value)
    if (e.target.name === "name" && e.target.value === "") {
      setclassNameSpanInput("err_span_block");
    }
    if (e.target.name === "password" && e.target.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
    if (e.target.name === "confirmpassword" && e.target.value === "") {
      setclassNameSpanconfirmpassword("err_span_block");
    }
    // if (e.target.name === "fullname" && e.target.value === "") {
    //   setclassNameSpanfullname("err_span_block");
    // }
    // if (e.target.name === "age" && e.target.value === "") {
    //   setclassNameSpanage("err_span_block");
    // }
  };

  const onFocusEven = (e) => {
    spanErr.current.classList.add("err_span_none");
    spanErrvn.current.classList.add("err_span_none");
    if (e.target.name === "name") {
      setclassNameSpanInput("err_span_none");
    }
    if (e.target.name === "password") {
      setclassNameSpanPassword("err_span_none");

    }
    if (e.target.name === "confirmpassword") {
      setclassNameSpanconfirmpassword("err_span_none");
    }
    // if (e.target.name === "fullname") {
    //   setclassNameSpanfullname("err_span_none");
    // }
    // if (e.target.name === "age") {
    //   setclassNameSpanage("err_span_none");
    // }
  };
  return (
    <div>
      <form className="form_main">

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
          onChangeEven={inputOnChange}
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
        {/* <Input_item
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
        <div className={classDiv}>
            <Input_item type="text" labelText="Bệnh viện công tác"/>
            <Input_item type="text" labelText="Chuyên khoa"/>
            <Input_item type="text" labelText="Học vị"/>
            <Input_item type="text" labelText="Số năm công tác trong ngành"/>
            </div> */}
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng ký
        </button>
        <span className="err_span_none" ref={spanErrvn}>
          Mật khẩu có chứa ký tự đặc biệt , vui lòng nhập lại mật khẩu
        </span>
        <span className="err_span_none" ref={spanErr}>
          Đăng ký thất bại , tên đăng nhập đã tồn tại , vui lòng hãy tạo tên
          nhập mới nha :3
        </span>
      </form>
    </div>
  );
}
export default Register;
