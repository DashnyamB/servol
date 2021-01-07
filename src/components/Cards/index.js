import React, { useEffect } from "react";
import Card from "../Card";
import $ from "jquery";
import "../../js/lightslider";
import "./style.scss";

const Cards = () => {
  useEffect(() => {
    $(document).ready(function () {
      $("#sliders").lightSlider({
        autoWidth: true,
        loop: true,
        onSliderLoad: function () {
          $("#sliders").removeClass("cS-hidden");
        },
      });
    });
  }, []);

  return (
    <ul id="sliders" className="cards cs-hidden">
      <Card orderLetter="a" />
      <Card orderLetter="b" />
      <Card orderLetter="c" />
      <Card orderLetter="d" />
      <Card orderLetter="e" />
      <Card orderLetter="f" />
    </ul>
  );
};

export default Cards;
