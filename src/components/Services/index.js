import React from "react";
import Service from "../Service";
import "./style.scss";

function Services(props) {
  return (
    <div className="service-icons">
      <Service showIcon={props.showIcon} title="Мэргэжлийн үйлчилгээ" />
      <Service showIcon={props.showIcon} title="Сургалт" />
      <Service showIcon={props.showIcon} title="Зөвлөх үйлчилгээ" />
      <Service showIcon={props.showIcon} title="Барилгын ажил, үйлчилгээ" />
      <Service showIcon={props.showIcon} title="Бичгийн үйлчилгээ" />
      <Service showIcon={props.showIcon} title="Автомашин, хүргэлт" />
      <Service showIcon={props.showIcon} title="Хувийн үйлчилгээ" />
      <Service showIcon={props.showIcon} title="Бусад" />
    </div>
  );
}

export default Services;
