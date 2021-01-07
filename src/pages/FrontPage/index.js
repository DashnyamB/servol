import React, { useState } from "react";
import Header from "../../components/Header";
import LargeHero from "../../components/LargeHero";
import MobileMenu from "../../components/MobileMenu";
import OurAdvantages from "../../components/OurAdvantages";
import OurServices from "../../components/OurServices";
import RecommendedServices from "../../components/RecommendedServices";
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
    </div>
  );
}

export default FrontPage;
