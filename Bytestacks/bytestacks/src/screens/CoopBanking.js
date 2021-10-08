import CoopHeader from "../components/CoopBanking/CoopHeader";
import Footer from "../components/Footer/Footer";
import Trust from "../components/reusables/Trust";
import Work from "../components/reusables/Work";

const CoopBanking = () => {
  return (
    <div>
      <CoopHeader activeClass="active" />
      <Work />
      <Trust />
      <Footer />
    </div>
  );
};

export default CoopBanking;
