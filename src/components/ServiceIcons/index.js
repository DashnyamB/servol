import React from "react";
import ServiceIcon from "../ServiceIcon";
import "./style.scss";

function ServiceIcons() {
  return (
    <div className="service-icons">
      <ServiceIcon title="Мэргэжлийн үйлчилгээ" />
      <ServiceIcon title="Сургалт" />
      <ServiceIcon title="Зөвлөх үйлчилгээ" />
      <ServiceIcon title="Барилгын ажил, үйлчилгээ" />
      <ServiceIcon title="Бичгийн үйлчилгээ" />
      <ServiceIcon title="Автомашин, хүргэлт" />
      <ServiceIcon title="Хувийн үйлчилгээ" />
      <ServiceIcon title="Бусад" />
    </div>
  );
}

export default ServiceIcons;
