import React, { useEffect, useState } from "react";
import "./style.scss";
const Slider = (props) => {
  //   const [images, setImages] = useState([
  //     "https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23-1024x683.jpg",
  //     "https://s23527.pcdn.co/wp-content/uploads/2019/12/Downside-Up-745x449.jpg.optimal.jpg",
  //     "https://images.pexels.com/photos/207962/pexels-photo-207962.jpeg?cs=srgb&dl=pexels-pixabay-207962.jpg&fm=jpg",
  //     "https://i.pinimg.com/736x/82/43/f4/8243f47cfd5aa438a36841a01580fec9.jpg",
  //   ]);
  const [bigImage, setBigImage] = useState();
  useEffect(() => {
    if (props.images) {
      setBigImage(props.images[0]);
    }
  }, []);
  return (
    <section className="service-slider">
      <div className="service-slider__slider">
        <figure>
          <img src={bigImage} />
        </figure>
      </div>
      <div className="service-slider__image-list">
        {props.images
          ? props.images.map((image) => (
              <figure>
                <img src={image} onClick={() => setBigImage(image)} />
              </figure>
            ))
          : null}
      </div>
    </section>
  );
};

export default Slider;
