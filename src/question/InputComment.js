import React, { useRef, useContext } from 'react';
import Context from '../store/Context';
const InputComment = ({ handleSubmit }) => {
  const valueText = useRef();
  const [dataUser, setDataUser] = useContext(Context);
  let checkShow = false;
  if (dataUser.id) {
    checkShow = true;
  }
  return (
    <div>
      {checkShow && (
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
                console.log('error');
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
      )}
    </div>
  );
};

export default InputComment;
