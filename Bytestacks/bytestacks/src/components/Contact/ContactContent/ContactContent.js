import "./ContactContent.css";
import MapImage from "../../../img/map.webp";
import Btn from "../../reusables/Btn";

const ContactContent = () => {
  return (
    <div>
      <div className="contact-content">
        <div className="contact-flex-container">
          <div className="contact-left">
            <img src={MapImage} alt="" />
          </div>
          <div className="contact-right">
            <h2 className="contact-title">Contact Us</h2>
            <span className="contact-subtitle">Let's talk</span>
            <div className="contact-form">
              <form action="">
                <div className="mini-flex">
                  <input type="text" placeholder="Your Name" />
                  <input type="email" placeholder="Your Email" />
                </div>
                <div className="mini-flex">
                  <input type="tel" placeholder="Your Phone" />
                  <input type="text" placeholder="Your Subject" />
                </div>{" "}
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  placeholder="Your Message"
                ></textarea>
                <br />
                <Btn title="Send Message" orangeBg="orange-btn" linkTo="" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactContent;
