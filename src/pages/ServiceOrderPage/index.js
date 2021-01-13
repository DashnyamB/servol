import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import MobileMenu from "../../components/MobileMenu";
import OrderInfo from "../../components/ServiceOrderPageComponent/OrderInfo";

const ServiceOrderPage = (props) => {
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
      <OrderInfo />
      <Footer />
    </div>
  );
};

export default ServiceOrderPage;
