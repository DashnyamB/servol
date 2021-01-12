import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Tutorial from "../../components/Tutorial";
import MobileMenu from "../../components/MobileMenu";
import RecommendedServices from "../../components/RecommendedServices";
const ServicePage = (props) => {
  return (
    <div>
      <Header toggleMobileMenu={props.toggleMobileMenu} transparent={false} />
      <MobileMenu
        MobileMenuOpen={props.MobileMenuOpen}
        toggleMobileMenu={props.toggleMobileMenu}
      />
      <RecommendedServices title="Шилдэг үйлчилгээнүүд" />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default ServicePage;
