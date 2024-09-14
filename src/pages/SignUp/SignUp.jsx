import React from "react";
import "./SignUp.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useRef,useEffect } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";

const SignUp = ({ setShowLogin }) => {
  const [loading, setloading] = useState(false);

  const handlesubmit = async (event) => {
    event.preventDefault();
    setloading(true);

    const {  email, otp } = event.target.elements;

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    // let bodyContent = JSON.stringify({
    //   email: email.value,
    // });

    let response = await fetch("https://med-1.onrender.com/api/registerotp", {
      method: "post",
      mode: "cors",
      body: bodyContent,
      headers: headersList,
    });

    let data = await response.json();
    console.log(data);
    let code = data.code;
    if (code === 404) {
      alert("OTP Sending Failed");
    }

    if (code === 200) {
      alert("OTP Sent successfull");
      settoken(data.data.token);
      setisAuth(data.data.token);
      navigate("/");
    }
  };

  // const Loginpopup = ({setShowLogin}) => {
  const [currState, setCurrState] = useState("Login");
  const [otpState, setOtpState] = useState("False");
  const [otp, setOtp] = useState(new Array(6).fill(""));
  // const firstInputRef = useRef(null); 

  // useEffect(() => {
  //   if (currState === "OTP" && firstInputRef.current) {
  //     firstInputRef.current.focus(); // Focus the first OTP input when the state is OTP
  //   }
  // }, [currState]);
  function handleBack(e, index) {
      if (e.key === "Backspace" && e.target.value === "") {
        e.preventDefault(); 
        if (e.target.previousSibling) {
          e.target.previousSibling.focus();
        }
      }
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        if (e.target.previousSibling) {
            e.target.previousSibling.focus();
        }
    }
    if (e.key === "ArrowRight") {
      e.preventDefault();
      if (e.target.nextSibling) {
          e.target.nextSibling.focus();
      }
  }
  }
  function handleChange(e, index) {
    if (isNaN(e.target.value)) return false;
    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
    if (!e.target.value &&e.target.previousSibling) {
      e.target.previousSibling.focus();
    }
  }

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currState === "Sign Up" ? (
            <>
              <input type="text" placeholder="your name" required />
            </>
          ) : (
            <></>
          )}
          {currState === "Login" ? (
            <>
              <input type="email" placeholder="your email" required for="Input" />
            </>
          ) : (
            <>
              {currState === "Sign Up" ? (
                <>
                  <input type="email" placeholder="your email" required name="email"/>
                </>
              ) : (
                <div className="OTP-input-bar">
                  {/* <input type="Number" placeholder="Enter Otp" required /> */}
                  {otp.map((data, i) => {
                    return (
                      <input 
                      className="OTP-input-field"
                      key={otp.index}
                        type="text"
                        value={data}
                        maxLength={1}
                        onChange={(e) => handleChange(e, i)}
                        onKeyDown={(e) => handleBack(e, i)}
                      />
                    );
                  })}
                </div>
              )}
            </>
          )}
        </div>
        <button onSubmit={() => setCurrState("OTP")} for="Input" type="submit">
          {currState === "OTP"
            ? "Confirm One Time Password"
            : "Send One Time Password"}
        </button>
        {/* <button>{currState === "Sign Up" ? "Create account" : "Log in"}</button> */}
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>By Continuing, i agree to the terms & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrState("Sign Up")}>Click here </span>{" "}
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
};

export default SignUp;
