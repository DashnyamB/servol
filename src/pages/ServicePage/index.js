import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/HeaderComponents/Header";
import Tutorial from "../../components/Tutorial";
import MobileMenu from "../../components/HeaderComponents/MobileMenu";
import RecommendedServices from "../../components/RecommendedServices";

import "./styles.scss";
import ServiceCards from "../../components/ServicePageComponents/ServiceCards";
const ServicePage = (props) => {
  return (
    <div>
      <Header
        toggleMobileMenu={props.toggleMobileMenu}
        transparent={false}
        position="relative"
      />
      <MobileMenu
        MobileMenuOpen={props.MobileMenuOpen}
        toggleMobileMenu={props.toggleMobileMenu}
      />

      <RecommendedServices title="Шилдэг үйлчилгээнүүд" />
      <ServiceCards />
      <Tutorial />
      <Footer />
    </div>
  );
};

export default ServicePage;
