import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const homeVariants = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
    transition: {
      duration: 1.5,
      type: "spring",
      stiffness: "120",
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const childVariants = {
  startAnimation: {
    opacity: 0,
    y: -50,
  },
  endAnimation: {
    opacity: 1,
    y: 0,
    // transition: {
    //   type: "tween",
    //   ease: "easeIn",
    // },
  },
};

const childVariantsBottom = {
  startAnimation: {
    opacity: 0,
  },
  endAnimation: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.6,
    },
  },
};

const imgVariants = {
  startAnimation: {
    opacity: 0,
    x: 100,
  },
  endAnimation: {
    opacity: 1,
    x: 0,
  },
};

const percentVariants = {
  startAnimation: {
    opacity: 0,
    width: 0,
  },
  endAnimation: {
    opacity: 1,
    width: "90%",
    transition: {
      duration: 2,
    },
  },
};

const sPercentVariants = {
  startAnimation: {
    opacity: 0,
    width: 0,
  },
  endAnimation: {
    opacity: 1,
    width: "70%",
    transition: {
      duration: 2,
    },
  },
};

const tPercentVariants = {
  startAnimation: {
    opacity: 0,
    width: 0,
  },
  endAnimation: {
    opacity: 1,
    width: "55%",
    transition: {
      duration: 2,
    },
  },
};
const BankingFlex = (props) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const animation = useAnimation();
  useEffect(() => {
    if (!inView) {
      animation.start("startAnimation");
    }
    if (inView) {
      animation.start("endAnimation");
    }
  }, [inView]);
  return (
    <motion.div animate={animation} variants={homeVariants} ref={ref}>
      <div className="flex-container">
        <motion.div variants={homeVariants} className="flex-left-content">
          <motion.div variants={childVariants} className="flex-title">
            {props.title}
          </motion.div>
          <motion.div variants={childVariants} className="flex-subtitle">
            {props.subtitle}
          </motion.div>
          <motion.div variants={childVariants} className="flex-details">
            {props.details}
          </motion.div>

          <motion.div
            variants={childVariantsBottom}
            className={`banking-percent ${props.showBanking}`}
          >
            <div className="mini-percent-flex">
              <div className="mini-title-flex">
                <span className="percent-title">{props.percentTitle}</span>
                <span className="percent">{props.percent}</span>
              </div>
              <div className="percent-width">
                <motion.div
                  variants={percentVariants}
                  className="first-percent"
                ></motion.div>
              </div>
            </div>

            <div className="mini-percent-flex">
              <div className="mini-title-flex">
                <span className="percent-title">{props.percentTitle1}</span>
                <span className="percent">{props.percent1}</span>
              </div>
              <div className="percent-width">
                <motion.div
                  variants={sPercentVariants}
                  className="second-percent"
                ></motion.div>
              </div>
            </div>

            <div className="mini-percent-flex">
              <div className="mini-title-flex">
                <span className="percent-title">{props.percentTitle2}</span>
                <span className="percent">{props.percent2}</span>
              </div>
              <div className="percent-width">
                <motion.div
                  variants={tPercentVariants}
                  className="third-percent"
                ></motion.div>
              </div>
            </div>
          </motion.div>

          <motion.div className={`trust-card  ${props.showTrust}`}>
            <motion.div
              variants={childVariantsBottom}
              className="trust-card-container"
            >
              <div className="mini-trust-card">{props.trust}</div>
              <div className="mini-trust-card">{props.trust1}</div>
              <div className="mini-trust-card">{props.trust2}</div>
              <div className="mini-trust-card">{props.trust3}</div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div className="flex-right-content" variants={imgVariants}>
          <img src={props.flexImage} alt="" />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BankingFlex;
