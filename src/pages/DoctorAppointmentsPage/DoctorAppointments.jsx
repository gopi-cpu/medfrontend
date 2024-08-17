import React from "react";
import "./DoctorAppointments.css";
import { Doctors } from "../../assets/assets";

const DoctorAppointments = () => {
  return (
    <div className="DoctorAppointmentsMain">
      <div className="DAPContainer">
        <div className="DAPFilter">
          <h4>Filter</h4>
          <div className="DAPFilterHealthIssue">
            <h4>Health Isssue</h4>
            <form className="HealthIssue">
              <input type="checkbox" for="headAche" />
              <label for="HeadAche">Head Ache</label>
              <br />
              <input type="checkbox" for="fever" />
              <label for="fever">Fever</label>
              <br />
              <input type="checkbox" for="BackPain" />
              <label for="BackPain">Back Pain</label>
              <br />
              <input type="checkbox" for="StomachPain" />
              <label for="StomachPain">Stomach Pain</label>
              <br />
              <input type="checkbox" for="Cold" />
              <label for="Cold">Cold</label>
              <br />
              <input type="checkbox" for="EyeProblem" />
              <label for="EyeProblem">Eye Problem</label>
              <br />
              <input type="checkbox" for="SkinProblem" />
              <label for="SkinProblem">Skin Problem</label>
              <br />
              <input type="checkbox" for="ToothProblem" />
              <label for="ToothProblem">Tooth Problem</label>
              <br />
              <input type="checkbox" for="BonesProblem" />
              <label for="BonesProblem">Bones Problem</label>
            </form>
          </div>
          <div className="DAPRattingFilter">
            <h4>Ratting</h4>
            <form className="DAPRattingF">
              <input type="checkbox" for="Four" />
              <label for="Four">Four Star & Above</label>
              <br />
              <input type="checkbox" for="Three" />
              <label for="Three">Three to four Stars</label>
              <br />
              <input type="checkbox" for="Two" />
              <label for="Two">Two to Three Stars </label>
              <br />
              <input type="checkbox" for="One" />
              <label for="one">Below Two Stars</label>
            </form>
          </div>
          <div className="DAPLocationF">
            <h4>Location</h4>
            <form className="DAPLocationF">
              <input type="checkbox" for="Nearby" />
              <label for="Nearby">Nearby</label>
              <br />
              <input type="checkbox" for="Online" />
              <label for="Online">Online</label>
              <br />
              <input type="checkbox" for="Nellore" />
              <label for="Nellore">Nellore </label>
              <br />
              <input type="checkbox" for="Hyderabad" />
              <label for="Hyderabad">Hyderabad</label>
              <br />
              <input type="checkbox" for="Chennai" />
              <label for="chennai">chennai</label>
              <br />
              <input type="checkbox" for="Bangalore" />
              <label for="Bangalore">Bangalore</label>
              <br />
            </form>
          </div>
        </div>
        <div className="DAPDoctors">
          {Doctors.map((item, index) => {
            return (
              <div className="DoctorComponent" key={index}>
                <div className="DImgComp">
                  <img src={item.DoctorPhoto} alt="" className="DImg" />
                </div>
                <div className="DDetailsComp">
                  <div className="DName DDtl">{item.Name}</div>
                  <div className="DRatting DDtl">{item.Ratting}</div>
                  <div className="DEdu DDtl">{item.Education}</div>
                  <div className="DExperience DDtl">{item.Experience}</div>
                  <div className="DRole DDtl">{item.Role}</div>
                  <div className="DHos DDtl">{item.Hospital}</div>
                  <a href="/IndividualDoctPage">
                  <div className="DBookBtn ">Book Appointment</div>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DoctorAppointments;
