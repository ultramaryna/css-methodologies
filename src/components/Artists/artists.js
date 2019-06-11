import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import SlickSlider from '../SlickSlider/slickSlider'

const Artists = () => {

    function renderArtists(data) {
        const { allArtistsJson: { edges: artists } } = data;

        return (
            artists.map((item) => {
                const { node: artist } = item;
                return (
                    <div className="artists__item">
                        <div className="artists__img-wrapper">
                          <img src={artist.image.src} alt={artist.image.title} className="artists__img"/>
                        </div>
                        <div className="artists__content">
                          <h3 className="artists__title heading heading--violet">
                            <span className="heading__content">{artist.name}</span>
                          </h3>
                          <p class="artists__bio">{artist.shortBio}</p>
                          <Link to={artist.link} title={artist.name} className="artists__link btn btn--alter">
                              Czytaj
                          </Link>
                        </div>
                    </div>
                )
            })
        )
    }

  return (
      <StaticQuery
        query={graphql`
            query artistsQuery {
              allArtistsJson {
                edges {
                  node {
                    name,
                    link,
                    shortBio
                    image {
                      title,
                      src
                    }
                  }
                }
              }
            }
        `}
        render={data => (
          <div className="artists">
            <SlickSlider>
                {renderArtists(data)}
            </SlickSlider>
          </div>
        )}
     />
  )
}

export default Artists