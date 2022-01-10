import "./AboutTrust.css";
import BankingFlex from "../../reusables/BankingFlex";
import AboutImg from "../../../img/about-trust.svg";

const AboutTrust = () => {
  return (
    <div>
      <BankingFlex
        title="WHY TRUST US?"
        subtitle="Achieve digital transformation for your business services"
        details="With more than 12 years of experience in custom software development, we have a rich history of cooperating with both small startups and large enterprises. We not only provide our clients with a wide range of software development services but also offer our own products."
        trust="Collection"
        trust1="Aggregation"
        trust2="Reconciliation"
        trust3="Data Analysis"
        flexImage={AboutImg}
        showTrust="show-trust"
      />
    </div>
  );
};

export default AboutTrust;
