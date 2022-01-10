import AboutCompany from "../components/About/AboutCompany/AboutCompany";
import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import AboutPlatforms from "../components/About/AboutPlatforms/AboutPlatforms";
import AboutTrust from "../components/About/AboutTrust/AboutTrust";
import Footer from "../components/Footer/Footer";
import Trust from "../components/reusables/Trust";
import Work from "../components/reusables/Work";

const About = () => {
  return (
    <div>
      <AboutHeader />
      <AboutCompany />
      <AboutPlatforms />
      <AboutTrust />
      <Work />
      <Trust />
      <Footer />
    </div>
  );
};

export default About;
