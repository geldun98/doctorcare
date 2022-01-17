import React, { useRef } from 'react';

const InputComment = ({ handleSubmit }) => {
  const valueText = useRef();

  return (
    <div className="InputComment">
      <textarea ref={valueText}></textarea>
      <button
        onClick={() => {
          handleSubmit(valueText.current.value);
          valueText.current.value = '';
        }}
      >
        Đăng
      </button>
    </div>
  );
};

export default InputComment;
