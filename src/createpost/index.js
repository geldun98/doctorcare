import React, { useRef } from 'react';
import './style.scss';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import postApi from '../api/postApi';
import { useNavigate } from 'react-router-dom';
const CreatePost = () => {
  const valueheading = useRef();
  const valuebody = useRef();
  const hideValidate = useRef();
  const navigate = useNavigate();
  function handleSubmit() {
    const title = valueheading.current.value;
    const content = valuebody.current.value;
    var brief = content.replace(/<[^>]+>/g, '').substr(0, 350);
    if (valueheading.current.value.length === 0) {
      valueheading.current.parentElement.classList.remove('validate');
    }
    if (valuebody.current.value.length === 0) {
      hideValidate.current.parentElement.classList.remove('validate');
    }
    if (valueheading.current.value.length > 0 && valuebody.current.value.length > 0) {
      const dataPost = {
        title,
        content,
        brief,
      };
      postApi.add(dataPost).then(() => {
        navigate('/camnang');
        valueheading.current.value = '';
        valuebody.current.value = '';
      });
    }
  }
  return (
    <div className="CreatePost">
      <div className="CreatePost-content container">
        <div className="CreatePost-title validate">
          <span>Tiêu đề bài viết:</span>
          <input
            ref={valueheading}
            onFocus={() => {
              valueheading.current.parentElement.classList.add('validate');
            }}
          ></input>
          <span className="validate-text">Nhập lại tiêu đề</span>
        </div>
        <div className="CreatePost-body validate">
          <ReactQuill
            modules={CreatePost.modules}
            formats={CreatePost.formats}
            ref={valuebody}
            className="CreatePost-quill"
            onFocus={() => {
              hideValidate.current.parentElement.classList.add('validate');
            }}
          />
          <span className="validate-text" ref={hideValidate}>
            Nhập lại nội dung
          </span>
        </div>

        <button className="CreatePost-submit" onClick={handleSubmit}>
          Đăng bài viết
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
CreatePost.modules = {
  toolbar: [
    [{ header: [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link', 'image'],
    ['clean'],
  ],
};

CreatePost.formats = [
  'header',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'link',
  'image',
];
