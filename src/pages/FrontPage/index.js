import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/HeaderComponents/Header";
import LargeHero from "../../components/LargeHero";
import MobileMenu from "../../components/HeaderComponents/MobileMenu";
import OurAdvantages from "../../components/OurAdvantages";
import OurServices from "../../components/OurServices";
import RecommendedServices from "../../components/RecommendedServices";

import Tutorial from "../../components/Tutorial";
import "./style.scss";
function FrontPage(props) {
  return (
    <div className="front-page">
      <Header toggleMobileMenu={props.toggleMobileMenu} transparent={true} />
      <MobileMenu
        MobileMenuOpen={props.MobileMenuOpen}
        toggleMobileMenu={props.toggleMobileMenu}
      />
      <LargeHero />
      <RecommendedServices title="Бидний санал болгож буй үйлчилгээнүүд" />
      <OurAdvantages />
      <OurServices />
      <Tutorial />
      <Footer />
    </div>
  );
}

export default FrontPage;
