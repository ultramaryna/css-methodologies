import React from "react"
import Slider from "react-slick";

const SlickSlider = ({children}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      {children}
    </Slider>
  )
}

export default SlickSlider
