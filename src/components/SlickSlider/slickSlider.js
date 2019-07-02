import React from "react";
import Slider from "react-slick";

const SlickSlider = ({children, customSettings }) => {
  const defaultSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const settings = {...defaultSettings, ...customSettings};

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default SlickSlider;
