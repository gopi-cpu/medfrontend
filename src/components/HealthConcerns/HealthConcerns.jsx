import React from "react";
import "./HealthConcerns.css";
import { HealthProblemsList } from "../../assets/assets";

const HealthConcerns = () => {
  return (
    <>
      <h2 className="HeadingHealthConcers">Smart Meds for Your Health</h2>
      <div className="HealthConcerns">
        {HealthProblemsList.map((item, index) => {
          return (
            <div className="HealthProblemsList" key={index}>
              <img
                src={item.HealthProblemImage}
                className="HealthProblemImage"
                alt="" 
              />
              <p className="HealthProblemName">{item.HealthProblemName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HealthConcerns;