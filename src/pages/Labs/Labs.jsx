import React from "react";
import "./Labs.css";
import { LabsList } from "../../assets/assets";

const Labs = () => {
  return (
    <div className="LabsPage">
      <div className="LabSmallImg">Click here For Blood Check up at Door Step</div>
      <div className="LabsList">
        <div className="LabsFilter">
          {/* <select name='LabTypes' id='FilterLabs'>
          <option value="All">All</option>
          <option value="Blood test">Blood test</option>
          <option value="Urinalysis">Urinalysis</option>
          <option value="Pathology">Pathology</option>
          <option value="hematology">hematology</option>
          </select> */}
          <h4>Filter</h4>
          <div className="DAPFilterHealthIssue">
            <h4>Health Isssue</h4>
            <form className="HealthIssue">
              <input type="checkbox" for="BloodTest" />
              <label for="BloodTest">Blood Test</label>
              <br />
              <input type="checkbox" for="SugarTest" />
              <label for="SugarTest">Sugar Test</label>
              <br />
              <input type="checkbox" for="BloodPressure" />
              <label for="BloodPressure">Blood Pressure</label>
              <br />
              <input type="checkbox" for="Urinalysis" />
              <label for="Urinalysis">Urinalysis</label>
              <br />
              <input type="checkbox" for="HealthCheckUp" />
              <label for="HealthCheckUp">Health check Up</label>
              <br />
              <input type="checkbox" for="" />
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
        <div className="Labs">
          {LabsList.map((item, index) => (
            <div className="LabItem" key={index}>
              <div className="LabImgItem">
                <img src={item.LabImage} alt="" className="LabImg" />
              </div>
              <div className="LabDetails">
                <div className="LabName">{item.LabName}</div>
                <div className="LabRatting">{item.LabRatting}</div>
                <div className="LabStatus">{item.LabStatus}</div>
                <div className="LabAddress">{item.LabAddress.Area}</div>
                <div className="LabDistance">{item.LabDistance}</div>
                <div className="LabServices">
                  <span>{item.LabServices[0]}</span>
                  <span>{item.LabServices[1]}</span>
                  <span>{item.LabServices[2]}</span>
                  <span>{item.LabServices[3]}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Labs;
