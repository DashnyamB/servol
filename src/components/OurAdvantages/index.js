import React from "react";
import ListItem from "../ListItem";
import "./style.scss";

import img from "../../assets/images/1.jpg";

const OurAdvantages = () => {
  return (
    <section className="our-advantages wrapper">
      <h1 className="section-title">Бидний давуу тал</h1>
      <div className="our-advantages__content">
        <div className="our-advantages__content__info">
          <ul className="our-advantages__content__info__list">
            <ListItem
              title="Богино гарчиг"
              description="Та өөрийн чаддаг зүйлээ бидэнд мэдэгдэхэд болно. "
            />
            <ListItem
              title="Богино гарчиг"
              description="Та өөрийн чаддаг зүйлээ бидэнд мэдэгдэхэд болно. "
            />
            <ListItem
              title="Богино гарчиг"
              description="Та өөрийн чаддаг зүйлээ бидэнд мэдэгдэхэд болно. "
            />
            <ListItem
              title="Богино гарчиг"
              description="Та өөрийн чаддаг зүйлээ бидэнд мэдэгдэхэд болно. "
            />
            <ListItem
              title="Богино гарчиг"
              description="Та өөрийн чаддаг зүйлээ бидэнд мэдэгдэхэд болно. "
            />
          </ul>
        </div>
        <div className="our-advantages__content__image">
          <figure>
            <img src={img} />
          </figure>
        </div>
      </div>
    </section>
  );
};

export default OurAdvantages;
