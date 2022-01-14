import React from 'react'

const Input_item = ({type,labelText,name,value}) => {
    return (
        <div>
        <label>{labelText}</label>
        <input type={type} name={name} value={value}></input>
        </div>
    )
}

export default Input_item
