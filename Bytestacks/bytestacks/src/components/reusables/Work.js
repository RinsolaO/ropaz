import React from "react";
import { Link } from "react-router-dom";
import Btn from "./Btn";

const Work = () => {
  return (
    <div className="work-with-us smaller-container ">
      <div className="work-with-us-container inner-flex">
        <div className="work-title">WANT TO WORK WITH US?</div>
        <div className="work-subtitle">
          Digitally transform and grow your business!
        </div>
        <div className="work-details">
          <p>
            Bytestacks is a leading software development company located in the
            heart of Lagos, Nigeria.
          </p>
          <p>
            We have strong principles and a long history of delivering effective
            solutions.
          </p>
        </div>
        <div className="work-btn">
          <a href="tel:+234812345678">
            <Btn
              orangeBg="orange-btn"
              title="Call now"
              linkTo="tel:+234812345678"
            />
          </a>
          <Link to="/Contact">
            {" "}
            <Btn orangeBg="white-btn" title="Contact Us" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Work;
