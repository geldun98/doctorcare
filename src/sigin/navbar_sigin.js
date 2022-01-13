import React from 'react'
import { Routes,Route,Link,BrowserRouter} from "react-router-dom";
import Sigin from "./sigin";
import Register from "./register";
const navbar_sigin = () => {
    return (
        <div>
            <div>
              <Link to='/dangnhap/?sigin'>đăng nhập</Link>
              <Link to='/dangnhap/?register'>đăng ký</Link>
            </div>
            
        </div>
    )
}

export default navbar_sigin
