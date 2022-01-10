import "./AboutCard.css";
import { motion } from "framer-motion";

const cardVariants = {
  startAnimation: {
    // opacity: 0,
  },
  endAnimation: {
    // opacity: 1,
  },
  hoverAnimation: {
    y: -20,
    transition: {
      duration: 0.3,
      type: "tween",
      ease: "easeOut",
    },
  },
};

const imgVariants = {
  hoverAnimation: {
    rotateY: 360,
  },
  transition: {
    duration: 1,
  },
};

const AboutCard = (props) => {
  return (
    <motion.div
      className="about-mini-card"
      initial="startAnimation"
      animate="endAnimation"
      whileHover="hoverAnimation"
      variants={cardVariants}
    >
      <div className="about-mini-card-container">
        <motion.img variants={imgVariants} src={props.img} alt="" />
        <span className="about-mini-title">{props.title}</span>
        <p className="about-mini-details">{props.details}</p>
      </div>
    </motion.div>
  );
};

export default AboutCard;
