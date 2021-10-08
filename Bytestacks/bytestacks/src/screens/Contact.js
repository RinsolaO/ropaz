import React from "react";
import ContactContent from "../components/Contact/ContactContent/ContactContent";
import ContactHeader from "../components/Contact/ContactHeader/ContactHeader";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

const Contact = () => {
  return (
    <div>
      <ContactHeader />
      <ContactContent />
      <Footer />
    </div>
  );
};

export default Contact;
