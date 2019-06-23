import { Link } from "gatsby"
import React from "react"

const Hero = () => {

  const scrollToContent = () => {
    const content = document.querySelector(".section--featured-posts");
    content.scrollIntoView({behavior: "smooth"});
  }

  return (
    <section className="hero">
      <div className="hero__content">
        <h1 className="heading--main hero__title">Nowa scena w Krakowie</h1>
        <Link to="/articles/lorem-ipsum" className="btn btn--primary hero__read-more">Czytaj</Link>
      </div>
      <button type="button" className="hero__scroll icon-chevron" onClick={scrollToContent} />
    </section>
  );
}

export default Hero
