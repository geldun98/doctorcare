import React from 'react'

const Input_item = (type,labelText) => {
    return (
        <div>
        <label>{labelText}</label>
        <input type={type}></input>
        </div>
    )
}

export default Input_item
