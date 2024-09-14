import React from "react";
import "./BloodPage.css";
import { BloodDonor } from "../../assets/assets";
const BloodPage = () => {
  return (
    <div className="BloodPageMain">
      <div className="BloodPageContainer">
        <div className="BloodFilterComp">
          <h4>Filter</h4>
          <div className="DAPFilterHealthIssue">
            <h4>Blood Groups</h4>
            <form className="BloodTypes">
              <input type="checkbox" htmlFor="ALL" />
              <label htmlFor="ALL">ALL</label>
              <br />
              <input type="checkbox" htmlFor="O+" />
              <label htmlFor="o+">o+</label>
              <br />
              <input type="checkbox" htmlFor="o-" />
              <label htmlFor="o-">o-</label>
              <br />
              <input type="checkbox" htmlFor="A+" />
              <label htmlFor="A+">A+</label>
              <br />
              <input type="checkbox" htmlFor="A-" />
              <label htmlFor="A-">A-</label>
              <br />
              <input type="checkbox" htmlFor="B+" />
              <label htmlFor="B+">B+</label>
              <br />
              <input type="checkbox" htmlFor="AB+" />
              <label htmlFor="AB+">AB+</label>
              <br />
              <input type="checkbox" htmlFor="AB-" />
              <label htmlFor="AB-">AB-</label>
              <br />
              <input type="checkbox" htmlFor="B-" />
              <label htmlFor="B-">B-</label>
              <br />
            </form>
          </div>
          <div className="DAPRattingFilter">
            <h4>Looking htmlFor</h4>
            <form className="DAPRattingF">
              <input type="checkbox" htmlFor="Donor" />
              <label htmlFor="Donor">Donor</label>
              <br />
              <input type="checkbox" htmlFor="Acceptor" />
              <label htmlFor="Acceptor">Acceptor</label>
              <br />
              <input type="checkbox" htmlFor="BloodBanks" />
              <label htmlFor="BloodBanks">Blood Banks</label>
              <br />
              {/* <input type="checkbox" htmlFor="One" />
              <label htmlFor="one">Below Two Stars</label> */}
            </form>
          </div>
          <div className="DAPLocationF">
            <h4>Location</h4>
            <form className="DAPLocationF">
              <input type="checkbox" htmlFor="Nearby" />
              <label htmlFor="Nearby">Nearby</label>
              <br />
              {/* <input type="checkbox" htmlFor="Online" />
              <label htmlFor="Online">Online</label>
              <br /> */}
              <input type="checkbox" htmlFor="Nellore" />
              <label htmlFor="Nellore">Nellore </label>
              <br />
              <input type="checkbox" htmlFor="Hyderabad" />
              <label htmlFor="Hyderabad">Hyderabad</label>
              <br />
              <input type="checkbox" htmlFor="Chennai" />
              <label htmlFor="chennai">chennai</label>
              <br />
              <input type="checkbox" htmlFor="Bangalore" />
              <label htmlFor="Bangalore">Bangalore</label>
              <br />
            </form>
          </div>
        </div>
        <div className="BloodComp">
          <div className="BloodPageHead">
            {/* <div className="FindBlood">Find Blood</div> */}
            <div className="DonateBlood">Click Donate Blood</div>
          </div>

          <div className="BloodDonor">
            {BloodDonor.map((item, index) => (
              <div className="DonorComp" key={index}>
                <div className="DonorImgComp">
                  <img src={item.DonorImage} alt="" className="DonorImg" />
                </div>
                <div className="DonorDetails">
                  <div className="DonorName">{item.DonorName}</div>
                  <div className="BloodGroup">{item.BloodGroup}</div>
                  <div className="DonorAddress">{item.Address.Area}</div>
                  <div className="DonorContact">{item.DonorContact}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BloodPage;
