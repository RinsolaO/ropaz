import HB from "../../img/hb.svg";
import Konga from "../../img/konga.svg";
import Egole from "../../img/egole.svg";
import Amali from "../../img/amali.svg";
import Riby from "../../img/riby.svg";
import Sabi from "../../img/sabi.svg";
import GB from "../../img/gatebank.svg";
import TB from "../../img/thrift-bank.svg";
import Btn from "./Btn";

const Trust = () => {
  return (
    <div className="trust-us ">
      <div className="work-with-us-container trust-container">
        <div className="work-header  inner-flex">
          <div className="work-title">TRUSTED BY OVER...</div>
          <div className="work-subtitle">Among our clients</div>
          <div className="work-details">
            <p>
              With more than 12 years of experience in custom software
              development, we have a rich history of cooperating with both small
              startups and large enterprises. We not only provide our clients
              with a wide range of software development services but also offer
              our own products.
            </p>
            <span>Your next successful project starts with Bytestacks.</span>
          </div>
        </div>

        <div className="work-footer">
          <img src={HB} alt="" className="platform-img" />
          <img src={Konga} alt="" className="platform-img" />
          <img src={Egole} alt="" className="platform-img" />
          <img src={Amali} alt="" className="platform-img amali" />
          <img src={Riby} alt="" className="platform-img" />
          <img src={Sabi} alt="" className="platform-img sabi" />
          <img src={GB} alt="" className="platform-img gb" />
          <img src={TB} alt="" className="platform-img tb" />
        </div>
      </div>
    </div>
  );
};

export default Trust;
