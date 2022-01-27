/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState, useContext } from "react";
import Input_item from "./components/Input_item";
import "./components/index.scss";
import MloginApi from "./components/loginAPIM";
import Context from "../store/Context";
import { useNavigate } from "react-router-dom";
import Slect_item from "./components/select_item";
function Sigin() {
  const navigate = useNavigate();
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
  function searchSpecialCharacters (valueinput){
    let x =
      "à,á,ạ,ả,ã,â,ầ,ấ,ậ,ẩ,ẫ,ă,ằ,ắ,ặ,ẳ,ẵ,è,é,ẹ,ẻ,ẽ,ê,ề,ế,ệ,ể,ễ,ì,í,ị,ỉ,ĩ,ò,ó,ọ,ỏ,õ,ô,ồ,ố,ộ,ổ,ỗ,ơ,ờ,ớ,ợ,ở,ỡ,ù,ú,ụ,ủ,ũ,ư,ừ,ứ,ự,ử,ữ,ỳ,ý,ỵ,ỷ,ỹ,đ,À,Á,Ạ,Ả,Ã,Â,Ầ,Ấ,Ậ,Ẩ,Ẫ,Ă,Ằ,Ắ,Ặ,Ẳ,Ẵ,È,É,Ẹ,Ẻ,Ẽ,Ê,Ề,Ế,Ệ,Ể,Ễ,Ì,Í,Ị,Ỉ,Ĩ,Ò,Ó,Ọ,Ỏ,Õ,Ô,Ồ,Ố,Ộ,Ổ,Ỗ,Ơ,Ờ,Ớ,Ợ,Ở,Ỡ,Ù,Ú,Ụ,Ủ,Ũ,Ư,Ừ,Ứ,Ự,Ử,Ữ,Ỳ,Ý,Ỵ,Ỷ,Ỹ,Đ";
    let z = valueinput.split('')
    z.forEach(element => {
      if(x.search(element)>=0){
        specialCharacters++
      }
    });
  }
  //data người dùng
  const spanErr = useRef();
  const spanErrvn = useRef();
  const usernameInput = useRef();
  const passwordInput = useRef();
  const [dataDoctor, setDataDoctor] = useContext(Context);
  const [classUserNameSpanInput, setclassUserNameSpanInput] = useState("err_span_none");
  const [classNameSpanPassword, setclassNameSpanPassword] =
    useState("err_span_none");
  
  const data = {
    username: "",
    password: "",
  };
  // đẩy dữ liệu lên khi nhấn nút 
  const handclick = (even) => {
    even.preventDefault();
    //điều kiện để đẩy dữ liệu lên
    if (
      usernameInput.current.value !== "" &&
      passwordInput.current.value !== "" &&
      specialCharacters === 0
    ) {
      data["username"] = usernameInput.current.value;
      data["password"] = passwordInput.current.value;
      MloginApi.add(data).then((res) => {
        if (res.status === 200) {
          localStorage.setItem("user", JSON.stringify(res.data.user));
          setDataDoctor(res.data.user);
          navigate("/trangchu");
        } else {
          spanErr.current.classList.remove("err_span_none");
          spanErr.current.classList.add("err_span_block");
        }
      });
    }
    //có ký tự đặc biệt ở pass
    if (specialCharacters > 0) {
      spanErrvn.current.classList.remove("err_span_none");
      spanErrvn.current.classList.add("err_span_block");
    }
    //ô name và pass để trống sẽ hiện lỗi
    if (usernameInput.current.value === "") {
      setclassUserNameSpanInput("err_span_block");
    }
    if (passwordInput.current.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
  };
  //khi rời ô nhập
  const onBlurEven = (e) => {
    if (e.target.name === "username" && e.target.value === "") {
      setclassUserNameSpanInput("err_span_block");
    }
    if (e.target.name === "username" ) {
      e.target.value = removeVietnameseTones(e.target.value);
    }
    if (e.target.name === "password" && e.target.value === "") {
      setclassNameSpanPassword("err_span_block");
      searchSpecialCharacters(e.target.value)
    }
    if (e.target.name === "password" ) {
      searchSpecialCharacters(e.target.value)
    }
  };
  //khi ấn vào ô nhập
  const onFocusEven = (e) => {
    spanErr.current.classList.add("err_span_none");
    spanErrvn.current.classList.add("err_span_none");
    if (e.target.name === "username") {
      setclassUserNameSpanInput("err_span_none");
    }
    if (e.target.name === "password") {
      setclassNameSpanPassword("err_span_none");
    }
  };

  //form đăng nhập
  return (
    <React.Fragment>
      <form className="form_main ">
        {/* <Slect_item></Slect_item> */}
        {/* tên đăng nhâp */}
        <Input_item
          type="text"
          labelText="Tên đăng nhập"
          className="input_group"
          Ref={usernameInput}
          classNameSpan={classUserNameSpanInput}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
          name={"username"}
        />
        {/* password */}
        <Input_item
          type="password"
          labelText="Mật khẩu"
          className="input_group"
          Ref={passwordInput}
          classNameSpan={classNameSpanPassword}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
          name={"password"}
        />
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng nhập
        </button>
        {/* lỗi khi có ký tự đặc biệt  */}
        <span className="err_span_none" ref={spanErrvn}>
          Mật khẩu có chứa ký tự đặc biệt , vui lòng nhập lại mật khẩu
        </span>
        {/* lỗi khi không thể đăng nhập */}
        <span className="err_span_none" ref={spanErr}>
          Sai mật khẩu hoặc tên đăng nhập
        </span>
      </form>
    </React.Fragment>
  );
}
export default Sigin;
