import React  from "react";
import  { useState } from 'react';

import { Navigate } from "react-router-dom";
import Logo_1 from "../assets/Logo_1.png";
import '../FORMS/forms.css';
import Dashboard from "./second_page"

const changepage = () =>{
  return( <Dashboard />
     )
  
}

const BasicForm = () => {
  const [isAuth, setIsAuth] = useState(true);


    const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const newLocal = "/Dashboard";
  return(
    <div className="bg_container col d-flex justify-content-center">

    <div className="login-wrapper shadow ">
      <div>
        <img src={Logo_1} className="login_img" alt=""/>

      </div>
      <form className="form1">
        <label >
          <input type="text" className="usernames" placeholder=" Email address" onChange={e => setUserName(e.target.value)}/>
        </label> <br/>
        <label>
          <input type="password" className="usernames" placeholder=" Password" onChange={e => setPassword(e.target.value)}/>
        </label>
        <div>
          <button onClick={"changepage"} className="button" id="btn1" type="submit">
           Sign In
              </button>
        </div>
        <div>
            <a href="#" className="forgetPwd">Forgot password</a>
        </div>

      </form>
    </div>
    </div>
  )
}

export default BasicForm