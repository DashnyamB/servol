import React from "react";
import "./style.scss";
import largeHeroImg from "../../assets/images/1.jpg";
import Search from "../Search";
function LargeHero() {
  return (
    <section className="large-hero">
      <div className="darken"></div>
      <figure>
        <img src={largeHeroImg} />
      </figure>
      <div className="large-hero__search wrapper">
        <h1>Та өөрт хэрэгтэй үйлчилгээгээ эндээс хайна уу.</h1>
        <Search placeholder="Үйлчилгээ хайх..." />
      </div>
    </section>
  );
}

export default LargeHero;
