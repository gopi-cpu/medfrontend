import React from "react";
import "./SignUp.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from "react";

const SignUp = () => {
  const[loading,setloading] = useState(false)
  
  const handlesubmit = async (event) =>{
    event.preventDefault()
    setloading(true)

    const {username,email,mobile} = event.target.elements;
    

    
    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      full_name: username.value,
      email: email.value,
      mobile:mobile.value,
    });

   let response = await fetch('http://127.0.0.1:4000/api/register',{
    method:"post",
    mode:"cors",
    body:bodyContent,
    headers:headersList
   })

   let data = await response.json();
   console.log(data)
   let code = data.code
   if(code ===404){
    alert('User not found')
   }

   if(code === 200){
    alert('login successfull')
    settoken(data.data.token)
    setisAuth(data.data.token)
    navigate("/")
    
   }
  }

  

  return (
    <div className="login">
      <div className="outer">
        <div className="triangle-left"></div>
        <div className="circle"></div>
        <div className="kite"></div>
        <div className="small-circle"></div>
        <div className="small-triangle"></div>
        <div className="rectangle"></div>
        <div className="inner">
          <div className="inner-left">
            <h2>Welcome Back!</h2>
            <p>To keep connected with us please login with your personal info</p>
            <div className="signIn">SIGN IN</div>
          </div>
          <div className="inner-right">
            <h2>Create Account</h2>
            <div className="icons">
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-linkedin-in"></i>
            </div>
            <p>or use your gmail for regitration</p>
            <form onSubmit={(event)=>handlesubmit(event)}>
            <input type="placeholder" name="username" id="NameHolder"/>
            <input type="placeholder" name="email" id="NameHolder" />
            <input type="placeholder" name="mobile" id="NameHolder" />
            <button className="sign-up">SIGN UP</button>
            </form>
            

          </div>
        </div>
      </div>
    </div>
  );
}; 

export default SignUp;
