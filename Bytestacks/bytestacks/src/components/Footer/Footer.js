import "./Footer.css";
import Fb from "../../img/facebook.svg";
import Ig from "../../img/instagram.svg";
import In from "../../img/linkedin.svg";
import Twi from "../../img/twitter.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-about details">
            <div className="footer-title">About</div>
            <p>
              Bytestacks is a leading software development company located in
              the heart of Lagos, Nigeria.
            </p>
            <div className="footer-social">
              <img src={Fb} alt="" />
              <img src={Twi} alt="" />
              <img src={In} alt="" />
              <img src={Ig} alt="" />
            </div>
          </div>

          <div className="footer-services details">
            <div className="footer-title">Our Services</div>
            <ul className="footer-service">
              <li>
                <Link to="/AgencyBanking">Digital Banking</Link>
              </li>
              <li>
                <Link to="/DigitalBanking">Agency Banking</Link>
              </li>
              <li>
                <Link to="/CooperativeBanking">Coorperative Banking</Link>
              </li>
            </ul>
          </div>

          <div className="footer-links details">
            <div className="footer-title">Useful Links</div>
            <ul className="footer-service">
              <li>
                <Link to="About">About Us</Link>
              </li>
              <li>
                <Link>Services</Link>
              </li>
              <li>
                <Link> Portfolio</Link>
              </li>
              <li>
                <Link to="Contact"> Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="footer-contact details">
            <div className="footer-title">Contact Info</div>
            <ul>
              <li> Phone: +234812345678</li>
              <li>Email: hello@bytestacks.io</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © 2021 Bytestacks Ltd. Software Development Company. All rights
            reserved
          </div>
          <div className="footer-bottom-right">
            <ul>
              <li>
                <Link>Terms &amp; Conditions </Link>
              </li>
              <li>
                <Link>Privacy Policy</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
