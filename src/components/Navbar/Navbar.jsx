import React from "react";
import { useState } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import SubNavbar from "../SubNavbar/SubNavbar";

const Navbar = () => {
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (latitude, longitude) => {
    // event.preventDefault();
    setLoading(true);
    // const {latitude,longitude}=

    let headersList = {
      Accept: "*/*",
      "Content-Type": "application/json",
    };

    let bodyContent = JSON.stringify({
      long: longitude,
      lat: latitude,
    });

    let response = await fetch("http://localhost:4000/admin/nearbyshops", {
      method: "POST",
      mode: "cors",
      body: bodyContent,
      headers: headersList,
    });
    let data = await response.json();
    console.log(data);
    let code = data.code;
    if (code === 404) {
      alert("Location Not Found");
    }

    if (code === 200) {
      alert("Location Found");
      settoken(data.data.token);
      setisAuth(data.data.token);
      navigate("/");
    }
  };

  function gotLocation(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log("Latitude:", latitude);
    console.log("Longitude:", longitude);
    handleSubmit(latitude, longitude);
  }
  function UnknownLocation() {
    console.log("There was some issue");
  }
  async function currentLocation() {
    const position = navigator.geolocation.getCurrentPosition(
      gotLocation,
      UnknownLocation
    );
    return position;
  }
  return (
    <>
      <div className="Navbar">
        <a href="/">
          <img src={assets.medico} alt="" className="Logo" />
        </a>
        <div className="Nav-hero">
          <div className="Location">
            <i className="fa-solid fa-location-dot"></i>
            <div className="city">Nellore</div>
            <i
              className="fa-solid fa-location-crosshairs"
              id="get-current-location"
              onClick={currentLocation}
            ></i>
          </div>
          <div className="SearchBar">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input
              className="Search-input"
              placeholder="Search Medicine or Medical Stores Nearby"
            />
            <i className="fa-solid fa-camera"></i>
          </div>
        </div>
        <div className="Login">
          <a href="/SignUp">Sign in | Sign Up</a>
        </div>
        <div className="">
          <a href="/Cart" className="cart">
            <i className="fa-solid fa-cart-shopping"></i>Cart
          </a>
        </div>
        <div className="Offers">
          <i className="fa-solid fa-percent"></i>Offers
        </div>
      </div>
      {/* <SubNavbar /> */}
    </>
  );
};

export default Navbar;
