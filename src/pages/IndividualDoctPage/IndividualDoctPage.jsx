import React from "react";
import "./IndividualDoctPage.css";
import { Doctors } from "../../assets/assets";
import { assets } from "../../assets/assets";

const IndividualDoctPage = () => {
  const arr = Doctors[1];
  const ach=arr.Achievements;
  return (
    <div className="IndividualDoctorPage">
      <div className="IDPMain">
        <div className="DoctorDetailsID">
          <div className="IDPMainImage">
            <img src={arr.DoctorPhoto} alt="" className="IDPImage" />
          </div>
          <div className="IDPSubImages">
            <img src={assets.Doctor} alt="" className="IDPSubImg" />
            <img src={assets.medstore1} alt="" className="IDPSubImg" />
            <img src={assets.medstore2} alt="" className="IDPSubImg" />
            <img src={assets.medstore3} alt="" className="IDPSubImg" />
          </div>
        </div>
        <div className="DoctorMedDetailsID">
          <div className="IDPDName">
            {arr.Name}
          <span className="IDPDEducation">{arr.Education}</span>
          </div>
            <div className="IDPDRatting">{arr.Ratting}</div>
          <div className="IDPDRole">{arr.Role}</div>
          <div className="IDPDHospital">{arr.Hospital}</div>
          <div className="IDPDExperience">{arr.Experience}</div>
          <div className="IDPDLocation">Achari Street,Nellore</div>
          <div className="IDPDEContact">Contact:+91 9876543210</div>
        <div className="Achivements">
          <h4>Achivements</h4>
          <ul>
            <li>{arr.Achievements.one}</li>
            <li>{arr.Achievements.two}</li>
            <li>{arr.Achievements.three}</li>
          </ul>
        </div>
        </div>
        <div className="DoctorAppointmentID">
          <h4>Book an Appointment</h4>
          {/* <div className="IDPDABSlot">
          </div> */}
          <div className="BookingBtns">
            <div className="OnlineBookingBtn">Online Appointment</div>
            <div className="OfflineBookingBtn">Offline Appointment</div>
          </div>
        </div>
      </div>
      <div className="IDPMoreImages"></div>
    </div>
  );
};

export default IndividualDoctPage;
