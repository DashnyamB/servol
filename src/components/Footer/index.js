import React, { useState, useEffect } from "react";
import Column from "../Column";
import "./style.scss";

const Footer = (props) => {
  const [AboutUs, setAboutUs] = useState({
    title: "Бидний тухай",
    lists: ["Бидний тухай", "Хамтарч ажиллах", "Дүрэм", "Үйлчилгээний нөхцөл"],
  });
  const [categories, setCategories] = useState({
    title: "Үйлчилгээ",
    services: [
      "Мэргэжлийн үйлчилгээ",
      "Сургалт",
      "Зөвлөх үйлчилгээ",
      "Барилгын ажил, үйлчилгээ",
      "Бичгийн үйлчилгээ",
      "Автомашин, хүргэлт",
      "Хувийн үйлчилгээ",
      "Бусад",
    ],
  });
  const [support, setSupport] = useState({
    title: "Тусламж",
    lists: [
      "Тусламж авах",
      "Аюулгүй байдал",
      "Үйлчилгээ худалдах",
      "Үйлчилгээ авах",
    ],
  });

  const toggleActive = (e) => {
    e.target.classList.toggle("active");
  };
  return (
    <footer className="footer ">
      {/* Дэлгэцийн хэмжээ жижиг болоход dropdown болгох */}
      <div className="footer__body wrapper">
        {/* үйлчилгээнүүд */}
        <section onClick={toggleActive} className="footer__categories">
          <h1>{categories.title}</h1>
          <Column lists={categories.services} />
        </section>
        {/* Бидний тухай */}
        <section onClick={toggleActive} className="footer__about-us">
          <h1>{AboutUs.title}</h1>
          <Column lists={AboutUs.lists} />
        </section>
        {/* Тусламж */}

        <section onClick={toggleActive}>
          <h1>{support.title}</h1>
          <Column lists={support.lists} />
        </section>
      </div>

      <section className="footer__bottom">
        <p>
          <span> Service-mn.com 2021</span>
        </p>
      </section>
    </footer>
  );
};

export default Footer;
