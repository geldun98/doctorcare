/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState ,useContext} from "react";
import Input_item from "./components/Input_item";
import "./components/index.scss";
import MloginApi from './components/loginAPIM';
import Context from "../store/Context";
function Sigin() {
  //data người dùng
  let check = 2
  const nameInput = useRef();
  const passwordInput = useRef();
  const data = {
    username: "",
    password: "",
  };
  const [dataDoctor, setDataDoctor] = useContext(Context)
  // tự động đăng nhập
  const dataUse = JSON.parse(localStorage.getItem("dataUse"))
  if (!dataUse) {
    console.log("không có dữ liệu ")
  }
  if(dataUse){
    
    data["username"] = dataUse.data.user.username
    data["password"] = dataUse.data.user.password
    MloginApi.add(data).then((res)=>{
      if( res.status === 200){
        localStorage.setItem("dataUse",JSON.stringify(res))
        console.log("đã thành công")
        check = true
        console.log(check+1)
      }
      else {
        console.log("không thành công")
      }
    })
  }
  // // function test(){
  // //   if(true){
  // //     setDataDoctor({ id: dataUse.data.user.id , role:dataUse.data.user.role})
  // //     console.log(dataDoctor)
  // //     return 
  // //   }
  // // }
  // test()
  //điều kiện để submit
  const [classNameSpanInput, setclassNameSpanInput] = useState("err_span_none");
  const [classNameSpanPassword, setclassNameSpanPassword] =
    useState("err_span_none");
  const handclick = (even) => {
    even.preventDefault();
    if (nameInput.current.value !== "" && passwordInput.current.value !== "") {
      data["username"] = nameInput.current.value;
      data["password"] = passwordInput.current.value;
      MloginApi.add(data).then((res)=>{
        if( res.status === 200){
          localStorage.setItem("dataUse",JSON.stringify(res))
          //useContext
          setDataDoctor({ id: res.data.user.id , role:res.data.user.role})
          console.log(res)
          console.log("đã thành công")
        }
        else {
          console.log("không thành công")
        }
      })
    }
    if (nameInput.current.value === "") {
      setclassNameSpanInput("err_span_block");
    }
    if (passwordInput.current.value === "") {
      setclassNameSpanPassword("err_span_block");
    }
  };
  
  const onBlurEven = (e) => {
    console.log(e.target.name);
    if (e.target.name === "name" && e.target.value==="" ) {
      setclassNameSpanInput("err_span_block");
    }
    if (e.target.name === "password"&& e.target.value==="") {
      setclassNameSpanPassword("err_span_block");
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
  };
  //form đăng nhập
  return (
    <React.Fragment>
      <form className="form_main">
        <Input_item
          type="text"
          labelText="Tên Đăng nhập"
          className="input_group"
          Ref={nameInput}
          classNameSpan={classNameSpanInput}
          onFocusEven={onFocusEven}
          onBlurEven = {onBlurEven}
          name={"name"}
        />
        <Input_item
          type="password"
          labelText="Mật khẩu"
          className="input_group"
          Ref={passwordInput}
          classNameSpan={classNameSpanPassword}
          onFocusEven={onFocusEven}
          onBlurEven = {onBlurEven}
          name={"password"}
        />
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng nhập
        </button>
      </form>
    </React.Fragment>
  );
}
export default Sigin;
