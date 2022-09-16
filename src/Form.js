import React, {useEffect, useState} from "react";
import './Form.css';
import Add from "./Add";
import image from "./edishop.png";
import {FaFacebook,FaGoogle,FaInstagram} from "react-icons/fa";
import AnotherComponent from "./AnotherComponent";
import User from './User';
// import { useState } from "react";

const Form=() => {
  const [email, setEmail] = useState("");
  console.log(email);
    const [password, setPassword] = useState("");
    
// const [error, setError] = useState("");
//     const [loading, setLoading] = useState(true);
  const handleSubmit = ()=>{
    const data= {
      email:email,
      password:password
    }
    alert((JSON.stringifydata))
  }

  return(
  
<div>
<div className="holder">


    <div className="list-itms">
     <p className="items"><h1 className="nav">Eddie Shop</h1></p>
     <p className="item"> <p id="left" className="create">Dont have an account? <span className="signin"> Sign up</span></p> </p>
    </div>

<h2 className="wish">Welcome Back</h2>
   <form className="form" onSubmit={handleSubmit}>
   <p className="input-header"> Your Email</p>

   <input type="text" className="input" name="username" id="useremail" placeholder="name@domain.com" onChange={(e) =>{setEmail(e.target.value)}} />
   <p className="input-header"> Password</p>
  
  <input type="password" name="username" className="input" id="userpassword" placeholder="at least 8 characters" onChange={(e) =>{setPassword(e.target.value)}}/> <br/>
  <input type="checkbox" className="checkbox"/>
  <p className="registered">Already a member <span className="getpassword"> Forgot password?</span></p>
<button className="submitbutton" type="submit">Login</button>
</form>
<p>
</p>
<p className="alternative">____________________________<span>or</span>_________________________</p>
<div className="socialicons">
<div className="facebook">
  <FaFacebook/>
</div>
<div className="google">
  <FaGoogle/>
</div>
<div className=" Instagram">
  <FaInstagram/>
</div>
</div>

<div className="container">
  <img src={image} alt="imgage"/>
</div>
</div>
{/* <Add email={email ? email :"loading"}/> */}
<AnotherComponent email={email ? email : "undefined"}/>


</div>

    );
}
// export default Form;
export default AnotherComponent;


