import React from "react";

const Premiere = ({ imageDesktop, image, link, title }) => (
  <div className="m-premiere">
    <a href={link} title={title}>
      <h3 className="m-premiere_title">{title}</h3>
      <picture className="m-premiere_pic">
        <source media="(min-width: 768px)" srcSet={imageDesktop} />
        <img src={image} alt={title} className="m-premiere_img"/>
      </picture>
    </a>
  </div>
)

export default Premiere