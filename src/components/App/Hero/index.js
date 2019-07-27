import React from "react";
import { Content, Section, ScrollBtn, ReadBtn, HeroTitle } from './styles.js';

const Hero = () => {

  const scrollToContent = () => {
    const content = document.querySelector("#featured-posts");
    content.scrollIntoView({behavior: "smooth"});
  }

  return (
    <Section>
        <Content>
            <HeroTitle>Nowa scena w Krakowie</HeroTitle>
            <ReadBtn type="secondary">Czytaj</ReadBtn>
        </Content>
        <ScrollBtn type="button" className="icon-chevron" onClick={scrollToContent} />
    </Section>
  );
}

export default Hero;