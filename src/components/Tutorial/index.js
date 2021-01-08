import React from "react";
import Video from "../Video";
import "./style.scss";

const Tutorial = () => {
  return (
    <section className="tutorial wrapper">
      <div className="tutorial__video">
        <Video />
      </div>
      <div className="tutorial__video">
        <Video />
      </div>
      <div className="tutorial__video">
        <Video />
      </div>
    </section>
  );
};

export default Tutorial;
