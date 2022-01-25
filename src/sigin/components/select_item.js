import React, { Component } from 'react'
import Select from 'react-select'

const Slect_item = ()=> {

    const options = [
        { value: 'chocolate', label: 'Chocolate' },
        { value: 'strawberry', label: 'Strawberry' },
        { value: 'vanilla', label: 'Vanilla' }
    ]
    return(
        <React.Fragment>
            <Select options={options} isMulti />
  </React.Fragment> 
  ) 
}
  export default Slect_item