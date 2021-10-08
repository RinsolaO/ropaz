import { useState } from "react";
import "./Header.css";
// import "../Contact/ContactHeader/ContactHeader.css";
import Logo from "../../img/logo.svg";
import { Link, NavLink } from "react-router-dom";
import Burger from "./Burger";
import Btn from "../reusables/Btn";
import { motion } from "framer-motion";

const platformVariants = {
  hoverAnimation: {
    height: 140,
  },
};

const Header = (props) => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);

  return (
    <header>
      <nav>
        <div className="logo">
          <NavLink to="/" activeClassName="active" exact={true}>
            <img src={Logo} alt="" className="nav-logo" />
          </NavLink>
        </div>
        <ul className={`nav-links ${open ? "active" : ""}`}>
          <li>
            <NavLink to="/About" activeClassName="active">
              About us
            </NavLink>
          </li>
          <motion.li
            class="hover-dropdown"
            initial="startAnimation"
            animate="endAnimation"
            whileHover="hoverAnimation"
          >
            <a href="" className={props.activeClass} exact={true}>
              Platforms
            </a>

            <motion.div class="dropdown">
              <ul class="mini-features-list">
                <li>
                  <Link onClick={() => setActive(!active)} to="/AgencyBanking">
                    Agency Banking
                  </Link>
                </li>
                <li>
                  <Link to="/DigitalBanking">Digital Banking </Link>
                </li>
                <li>
                  <Link to="/CooperativeBanking">Cooperative Banking</Link>
                </li>
              </ul>
            </motion.div>
          </motion.li>
          <li>
            <Link to="/" activeClassName="">
              Shedule a Demo
            </Link>
          </li>
          <li>
            <NavLink to="/Contact" exactTrue={true} activeClassName="active">
              <Btn title="Contact Us" orangeBg="orange-btn" />
            </NavLink>
          </li>
        </ul>

        <Burger
          onOpen={() => setOpen(!open)}
          activeClassName={open ? "active" : ""}
        />

        <div className="platforms-dropdown"></div>
      </nav>
    </header>
  );
};

export default Header;
