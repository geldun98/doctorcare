/* eslint-disable react/jsx-pascal-case */
import React, { useRef, useState, useContext } from 'react';
import Input_item from './components/Input_item';
import './components/index.scss';
import MloginApi from './components/loginAPIM';
import Context from '../store/Context';
import { useNavigate } from 'react-router-dom';
import updateApi from '../api/updateApi';

function Sigin() {
  const navigate = useNavigate();

  //data người dùng
  const validate = useRef();
  let check = 2;
  const nameInput = useRef();
  const passwordInput = useRef();
  const data = {
    username: '',
    password: '',
  };
  const [dataDoctor, setDataDoctor] = useContext(Context);
  // tự động đăng nhập
  const dataUse = JSON.parse(localStorage.getItem('dataUse'));
  if (!dataUse) {
  }
  if (dataUse) {
    data['username'] = dataUse.data.user.username;
    data['password'] = dataUse.data.user.password;
    MloginApi.add(data).then((res) => {
      if (res.status === 200) {
        localStorage.setItem('dataUse', JSON.stringify(res));

        check = true;
      } else {
      }
    });
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
  const [classNameSpanInput, setclassNameSpanInput] = useState('err_span_none');
  const [classNameSpanPassword, setclassNameSpanPassword] = useState('err_span_none');
  const handclick = (even) => {
    even.preventDefault();
    if (nameInput.current.value !== '' && passwordInput.current.value !== '') {
      data['username'] = nameInput.current.value;
      data['password'] = passwordInput.current.value;
      MloginApi.add(data).then((res) => {
        if (res.status === 200) {
          localStorage.setItem('user', JSON.stringify(res.data.user));

          setDataDoctor(res.data.user);
          navigate('/trangchu');
        } else {
          validate.current.parentElement.classList.remove('validate');
        }
      });
    }
    if (nameInput.current.value === '') {
      setclassNameSpanInput('err_span_block');
    }
    if (passwordInput.current.value === '') {
      setclassNameSpanPassword('err_span_block');
    }
  };

  const onBlurEven = (e) => {
    if (e.target.name === 'name' && e.target.value === '') {
      setclassNameSpanInput('err_span_block');
    }
    if (e.target.name === 'password' && e.target.value === '') {
      setclassNameSpanPassword('err_span_block');
    }
  };

  const onFocusEven = (e) => {
    validate.current.parentElement.classList.add('validate');
    if (e.target.name === 'name') {
      setclassNameSpanInput('err_span_none');
    }
    if (e.target.name === 'password') {
      setclassNameSpanPassword('err_span_none');
    }
  };
  //form đăng nhập
  return (
    <React.Fragment>
      <form className="form_main validate">
        <Input_item
          type="text"
          labelText="Tên Đăng nhập"
          className="input_group"
          Ref={nameInput}
          classNameSpan={classNameSpanInput}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
          name={'name'}
        />
        <Input_item
          type="password"
          labelText="Mật khẩu"
          className="input_group"
          Ref={passwordInput}
          classNameSpan={classNameSpanPassword}
          onFocusEven={onFocusEven}
          onBlurEven={onBlurEven}
          name={'password'}
        />
        <button type="submit" className="submit_button" onClick={handclick}>
          đăng nhập
        </button>
        <span className="validate-text" ref={validate}>
          Sai mật khẩu hoặc tên đăng nhập
        </span>
      </form>
    </React.Fragment>
  );
}
export default Sigin;
