import React, { useState } from "react";
import ServiceCard from "../ServiceCard";

import "./styles.scss";

const ServiceCards = (props) => {
  const [Services, setServices] = useState([
    {
      authorID: "11",
      authorName: "Баярсайхан Дашням",
      authorLevel: "2",
      starRating: "4.8",
      servicePrice: 200000,
      serviceDesc: "Мэргэжлийн түвшинд вэбсайт хийж өгнө",
      serviceImg:
        "https://www.egadesigns.com/wp-content/uploads/2020/01/best-website-builder-for-small-business-min.png",
      authorImg:
        "https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg",
    },
    {
      authorID: "11",
      authorName: "Хашбат Агиймаа",
      authorLevel: "9",
      starRating: "5,0",
      servicePrice: 300000,
      serviceDesc: "Мэргэжлийн түвшинд тайлан гаргаж өгнө",
      serviceImg:
        "https://i0.wp.com/www.rayhubs.com/wp-content/uploads/2020/06/5-Ways-to-Know-You-Need-to-Redesign-Your-Website.jpg?fit=1461%2C970&ssl=1",
      authorImg:
        "https://scontent.fuln6-1.fna.fbcdn.net/v/t1.0-9/101261092_1206042993060313_8623741250249424896_o.jpg?_nc_cat=107&ccb=2&_nc_sid=174925&_nc_ohc=17EDiBU4zVIAX92Un1m&_nc_ht=scontent.fuln6-1.fna&oh=8ca1e1e8fc282f1362ee81792d1cc7fa&oe=60226D55",
    },
  ]);

  return (
    <section className="service-cards wrapper">
      <h1 className="section-title"> Үйлчилгээнүүд</h1>
      <div className="service-cards__content">
        {Services.map((el) => (
          <ServiceCard key={el.authorID} serviceInfo={el} />
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
