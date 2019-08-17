import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Subtitle from "../../atoms/Subtitle/Subtitle";
import Section from "../../atoms/Section/Section";
import SlickSlider from "../../molecules/SlickSlider/slickSlider";
import Author from "../../molecules/Author/Author";

const Authors = () => {
  const slickSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 890,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  function renderAuthors(data) {
    const { allAuthorsJson: { edges: authors } } = data;

    return (
      authors.map((item) => {
        const {node: author} = item;
        return (
          <Author author={author} />
        )
      })
    )

  }

  return (
    <StaticQuery
      query={graphql`
        query authorsQuery {
          allAuthorsJson {
            edges {
              node {
                id,
                name,
                image,
                bio
              }
            }
          }
        }
      `}
      render={data => (
          <Section name="authors">
            <div className="o-authors slickAuthors">
                <Subtitle extraClass="o-authors_title" color="grey">
                    Twórcy
                </Subtitle>
                <SlickSlider customSettings={slickSettings}>
                    {renderAuthors(data)}
                </SlickSlider>
            </div>
          </Section>
      )}
    />
  )

}

export default Authors;