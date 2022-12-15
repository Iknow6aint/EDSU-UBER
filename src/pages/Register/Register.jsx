/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react'
import './style.css' 
import {FcGoogle} from "react-icons/fc"
import {RiTwitterFill} from'react-icons/ri';
import {FaFacebookSquare} from "react-icons/fa"
import {IconContext} from "react-icons";

const Register = () => {
    return (
        <div class="center">
        <div class="logo">
         <img src="https://www.edouniversity.edu.ng/uploads/settings/logo.png" alt="" srcset="" />
       <h1>TRIPS</h1>
       </div>
 
     <form method="post">
       <div class="txt_field">
         <input type="text" required/>
         <span></span>
         <label>Name</label>
       </div>
       <div class="txt_field">
         <input type="text" required/>
         <span></span>
         <label>Email</label>
       </div>
       <div class="txt_field">
         <input type="password" required/>
         <span></span>
         <label>Password</label>
       </div>
       <div class="txt_field">
         <input type="password" required/>
         <span></span>
         <label>Confirm Password</label>
       </div>
       <div class="pass">Forgot Password?</div>
       <input type="submit" value="Register"/>
       <div class="signup_link">
         Already have an account? <a href="#">Log in</a>
       </div>
     </form>
     <div class="ggg">
         <FcGoogle size={40}/>
           <RiTwitterFill size={40} color='#0ea5e9' />
           <FaFacebookSquare size={40} color="#0c4a6e" />
       </div>
   </div>
    )
}

export default Register