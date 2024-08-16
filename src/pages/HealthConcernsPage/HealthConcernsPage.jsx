import React from "react";
import "./HealthConcernsPage.css";
import { HealthProblemsList } from "../../assets/assets";

const HealthConcernsPage = () => {
    return (
    <>
      <h2 className="HCHeading">Smart med for your health</h2>
      <div className="HealthConcernsMainP">
        <div className="HealthConcernsP">
          {HealthProblemsList.map((item, index) => {
            return (
              <div className="HealthProblemsListP" key={index}>
                <img
                  src={item.HealthProblemImage}
                  className="HealthProblemImageP"
                  alt=""
                />
                <p className="HealthProblemNameP">{item.HealthProblemName}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HealthConcernsPage;
