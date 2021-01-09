import React from "react";
import Services from "../Services";
import "./style.scss";

const OurServices = () => {
  return (
    <section className="our-services wrapper">
      <h1 className="section-title">Бидний үйлчилгээнүүд</h1>
      <Services showIcon={true} />
    </section>
  );
};

export default OurServices;
