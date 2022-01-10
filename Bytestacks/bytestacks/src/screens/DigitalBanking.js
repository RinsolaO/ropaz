import DigitalHeader from "../components/DigitalBanking/DigitalHeader";
import Footer from "../components/Footer/Footer";
import Trust from "../components/reusables/Trust";
import Work from "../components/reusables/Work";

const DigitalBanking = () => {
  return (
    <div>
      <DigitalHeader activeClass="active" />
      <Work />
      <Trust />
      <Footer />
    </div>
  );
};

export default DigitalBanking;
