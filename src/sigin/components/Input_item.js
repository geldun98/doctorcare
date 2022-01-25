import React from "react";

const Input_item = ({
  type,
  labelText,
  name,
  placeholder,
  classNameSpan,
  className,
  Ref,
  onFocusEven,
  onBlurEven,
  onChangeEven,
  min,
}) => {
  return (
    <div className={className}>
      <label>{labelText}</label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        ref={Ref}
        onFocus={onFocusEven}
        onBlur={onBlurEven}
        onChange={onChangeEven}
        min={min}
      ></input>
      <span className={classNameSpan}>
        {"Vui lòng nhập đúng và đủ "}
        {labelText}
      </span>
    </div>
  );
};

export default Input_item;
