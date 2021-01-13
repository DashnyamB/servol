import React from "react";
import "./style.scss";
const OrderMoreInfo = (props) => {
  return (
    <section className="order-more-info">
      <h1 className="order-more-info__title">вэбсайт хийж үйлчилнэ</h1>

      {/* Үйлчилгээний тухай мэдээллийн зураг */}
      <div className="order-more-info__image">
        {/* Чөлөөт уран бүтээлчийн мэдээлэл */}
        <div className="order-more-info__image__author-info">
          <div className="order-more-info__image__author-info__author">
            <figure className="order-more-info__image__author-info__author__image">
              <img
                src="https://cdnb.artstation.com/p/assets/images/images/001/863/575/medium/irakli-nadar-artstation-da.jpg?1453903033"
                alt="something"
              />
            </figure>
            <div className="order-more-info__image__author-info__author__meta">
              <h2>Баярсайхан</h2>
              <p>Түвшин : 1</p>
            </div>
          </div>
          <div className="order-more-info__image__author-info__rating">
            Үнэлгээ : 4.8
          </div>
          <div className="order-more-info__image__author-info__all-orders">
            Нийт захиалагч : 458
          </div>
        </div>
        {/* ТӨГСГӨЛ чөлөөт уран бүтээлчийн мэдээллийн төгсгөл */}

        {/* Big Slider */}
        <div className="order-more-info__image__service-img">
          <figure>
            <img
              src="https://startdigital-startdigital.netdna-ssl.com/wp-content/uploads/2019/03/How-much-does-a-website-cost-2019.jpg"
              alt="haha"
            />
          </figure>
        </div>
        {/* ТӨГСГӨЛ big Slider */}
      </div>
      {/* ТӨГСГӨЛ Үйлчилгээний тухай мэдээллийн зураг */}
      <div className="order-more-info__description">
        <h1 className="order-more-info__description__title">
          Үйлчилгээний тухай дэлгэрэнгүй
        </h1>
        <p className="order-more-info__description__content">
          Hello and welcome to my gig! <br /> <br />
          Design and web development is my passion and profession, I've been
          doing it for the last 6 years - first as a hobby and then as a
          full-time job. If you need an exceptional & clean website this is the
          right Gig for you!
          <br /> <br /> It's very important to send a message before ordering!
          All packages include: - Creating a complete website, ready to launch
          in any topic/target audience (corporate, ecommerce, real estate etc.)
          - A unique design. I will NEVER use pre-made designs or templates.
          <br /> <br />
          This will guarantee that you will stand out from the crowd and have a
          one of a kind website! - UNLIMITED revisions. Yes, you heard it right
          I offer unlimited revisions not only when the order is active, but
          also within 2 weeks after it is marked it as “complete” - Blazing Fast
          Speed Optimization - On-Page SEO Optimization(excluding the textual
          content) - Working with a nice and humble guy with more than 600
          completed orders on Fiverr. <br /> <br />
          Note that the above packages do not include the cost for any 3rd party
          resources that your site may need(hosting, domain, theme etc.)
        </p>
      </div>
    </section>
  );
};

export default OrderMoreInfo;
