import { Link } from "gatsby";
import React from "react";
import Section from "./Section";
import Content from "./Content";
import LinkBtn from "../../shared/LinkBtn";
import ScrollBtn from "./ScrollBtn";

const Hero = () => {

  const scrollToContent = () => {
    const content = document.querySelector(".section--featured-posts");
    content.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Section>
        <Content>
            <h1 className="heading--main hero__title">Nowa scena w Krakowie</h1>
            <LinkBtn type="secondary">Czytaj</LinkBtn>
        </Content>
        <ScrollBtn type="button" className="icon-chevron" onClick={scrollToContent} />
    </Section>
  );
}

export default Hero;