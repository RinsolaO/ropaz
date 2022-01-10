import "./AboutPlatforms.css";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const AboutPlatforms = () => {
  const [ref, inView] = useInView({
    threshold: 0.6,
    triggerOnce: true,
  });
  return (
    <div className="about-platform smaller-container">
      <div className="about-platform-container ">
        <span className="about-platform-header">
          Our platforms have powered
        </span>
        <div className="about-platform-footer" ref={ref}>
          <div className="about-platform-mini-flex">
            <span>
              <CountUp duration={1} end={inView ? 12 : 0} />+
            </span>
            <p>Financial Operations</p>
          </div>
          <div className="about-platform-mini-flex">
            <span>
              <CountUp duration={1} end={inView ? 50 : 0} />
              Million+
            </span>
            <p>Transaction Count</p>
          </div>
          <div className="about-platform-mini-flex">
            <span>
              <CountUp duration={1} end={inView ? 100 : 0} />
              M+{" "}
            </span>
            <p>Transaction Volume</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPlatforms;
