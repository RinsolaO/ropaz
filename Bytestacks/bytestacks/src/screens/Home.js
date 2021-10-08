import AboutHeader from "../components/About/AboutHeader/AboutHeader";
import AboutCompany from "../components/About/AboutCompany/AboutCompany";
import ContactContent from "../components/Contact/ContactContent/ContactContent";
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import HomeContent from "../components/HomeContent/HomeContent";

const Home = () => {
  return (
    <div className="home-container">
      <Header />
      <HomeContent />
    </div>

    // ****************************************
    // ****************************************
    // ****************************************

    // <div>
    //   <AboutHeader />
    //   <AboutCompany />
    // </div>
  );
};

export default Home;
