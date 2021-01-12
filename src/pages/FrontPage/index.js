import React, { useState } from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import LargeHero from "../../components/LargeHero";
import Menu from "../../components/Menu";
import MobileMenu from "../../components/MobileMenu";
import OurAdvantages from "../../components/OurAdvantages";
import OurServices from "../../components/OurServices";
import RecommendedServices from "../../components/RecommendedServices";
import Services from "../../components/Services";
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
