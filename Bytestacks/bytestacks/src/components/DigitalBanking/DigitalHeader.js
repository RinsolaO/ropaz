import "./DigitalHeader.css";
import AboutImg from "../../img/about-company.svg";
import BankingFlex from "../reusables/BankingFlex";
import Header from "../Header/Header";

const DigitalHeader = () => {
  return (
    <div>
      <div className="digital-container container">
        <Header activeClass="active" />
      </div>
      <BankingFlex
        title=" DIGITAL BANKING"
        subtitle="Providing your business with
            infrastructure solutions that
            powers last mile payments."
        details="With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products. With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products. With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products."
        flexImage={AboutImg}
      />
    </div>
  );
};

export default DigitalHeader;
