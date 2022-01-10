import AgencyHeader from "../components/AgencyBanking/AgencyHeader/AgencyHeader";
import Footer from "../components/Footer/Footer";
import Trust from "../components/reusables/Trust";
import Work from "../components/reusables/Work";

const AgencyBanking = () => {
  return (
    <div>
      <AgencyHeader />
      <Work />
      <Trust />
      <Footer />
    </div>
  );
};

export default AgencyBanking;
