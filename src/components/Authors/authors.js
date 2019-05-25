import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SlickSlider from '../SlickSlider/slickSlider'

const Authors = () => {
  const slickSettings = {
    infinite: true,
    dots: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
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
          <div className="authors__item">
            <img src={author.image} alt={author.name} className="authors__image"/>
            <h3 className="authors__name">{author.name}</h3>
          </div>
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
        <div className="authors slick--authors">
          <h2 className="heading authors__title">
            <span className="heading__content">Twórcy</span>
          </h2>
          <SlickSlider customSettings={slickSettings}>
            {renderAuthors(data)}
          </SlickSlider>
        </div>
      )}
    />
  )

}

export default Authors
