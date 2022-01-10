import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const cardVariants = {
  startAnimation: {
    // opacity: 0,
  },
  endAnimation: {
    // opacity: 1,
  },
  hoverAnimation: {
    y: -3,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const HomeMiniCard = (props) => {
  return (
    <motion.div
      initial="startAnimation"
      animate="endAnimation"
      whileHover="hoverAnimation"
      variants={cardVariants}
      className="banking-card"
    >
      <Link to={props.linkTo}>
        <div className="mini-card-container"></div>
        <div className="mini-card-details">
          <img src={props.img} alt="" />
          <span> {props.title} </span>
        </div>
      </Link>
    </motion.div>
  );
};

export default HomeMiniCard;
