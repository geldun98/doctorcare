import React from 'react'

const Input_item = ({type,labelText,name,value}) => {
    return (
        <div>
        <label>{labelText}
        
        <input type={type} name={name} value={value}></input>
        </label>
        </div>
    )
}

export default Input_item
