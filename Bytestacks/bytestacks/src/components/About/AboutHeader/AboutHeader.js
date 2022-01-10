import React from "react";
import "./AboutHeader.css";
import AboutCard from "../AboutCard/AboutCard";
import AgencyBk from "../../../img/pos.svg";
import DigitalBk from "../../../img/smartphone.svg";
import CoopBk from "../../../img/users.svg";
import Header from "../../Header/Header";

const AboutHeader = () => {
  return (
    <div>
      <div className="about-container container">
        <Header />
      </div>
      <div className="about-card-flex">
        <AboutCard
          img={AgencyBk}
          title="Agency Banking"
          details="Our top notch Agency Banking System allows you to focus on the business side of things while it takes complete care of the technology side of things."
        />
        <AboutCard
          img={DigitalBk}
          title="Digital Banking"
          details="Our top notch Agency Banking System allows you to focus on the business side of things while it takes complete care of the technology side of things."
        />
        <AboutCard
          img={CoopBk}
          title="Coorperative
          Banking"
          details="Our top notch Agency Banking System allows you to focus on the business side of things while it takes complete care of the technology side of things."
        />
      </div>
    </div>
  );
};

export default AboutHeader;
