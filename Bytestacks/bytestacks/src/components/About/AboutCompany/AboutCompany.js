import "./AboutCompany.css";
import AboutImg from "../../../img/about-company.svg";
import BankingFlex from "../../reusables/BankingFlex";

const AboutCompany = () => {
  return (
    <div className="about-company-container">
      <BankingFlex
        title="ABOUT OUR COMPANY"
        subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
        details="With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products. With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products. With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products."
        percentTitle="Agency Banking"
        percent="90%"
        percentTitle1="Digital Banking"
        percent1="70%"
        percentTitle2="Co-operative Banking"
        percent2="55%"
        flexImage={AboutImg}
        showBanking="show-banking"
      />
    </div>
  );
};

export default AboutCompany;
