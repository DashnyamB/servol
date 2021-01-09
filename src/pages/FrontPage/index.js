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
function FrontPage() {
  const [MobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prevMobileMenuOpen) => !prevMobileMenuOpen);
    console.log(MobileMenuOpen);
  };
  return (
    <div className="front-page">
      <Header toggleMobileMenu={toggleMobileMenu} transparent={true} />
      <MobileMenu
        MobileMenuOpen={MobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <LargeHero />
      <RecommendedServices />
      <OurAdvantages />
      <OurServices />
      <Tutorial />
      <Footer />
    </div>
  );
}

export default FrontPage;
