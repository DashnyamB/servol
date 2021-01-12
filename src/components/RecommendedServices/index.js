import React from "react";
import Cards from "../Cards";
import "./style.scss";

const RecommendedServices = (props) => {
  return (
    <section className="recommended-services wrapper">
      <h1 className="section-title">{props.title}</h1>
      <Cards />
    </section>
  );
};

export default RecommendedServices;
