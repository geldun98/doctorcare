import React, { useRef } from 'react';

const InputComment = ({ handleSubmit }) => {
  const valueText = useRef();

  return (
    <div className="InputComment validate">
      <textarea
        ref={valueText}
        onFocus={() => {
          valueText.current.parentElement.classList.add('validate');
        }}
      ></textarea>
      <button
        onClick={() => {
          if (valueText.current.value.length === 0) {
            valueText.current.parentElement.classList.remove('validate');
          } else {
            handleSubmit(valueText.current.value);
            valueText.current.value = '';
          }
        }}
      >
        Đăng
      </button>

      <span style={{ width: 400 }} className="validate-text">
        Vui lòng nhập nội dung
      </span>
    </div>
  );
};

export default InputComment;
