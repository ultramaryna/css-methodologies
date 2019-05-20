import React from "react"
import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"

import SlickSlider from './Slider/SlickSlider'

const Artists = () => {

    function renderArtists(data) {
        const { allArtistsJson: { edges: artists } } = data;

        return (
            artists.map((artist) => {
                const { node: artist } = artist;
                return (
                    <div className="artists__item">
                        <img src={artist.image.src} alt={artist.image.title} className="artists__img"/>
                        <h3 className="artists__title heading">{artist.name}</h3>
                        <p class="artists__bio">{artis.shortBio}</p>
                        <Link to={artist.link} title={artist.name} className="artists__link btn btn--alter">
                            Czytaj
                        </Link>
                    </li>
                )
            });
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
                    images {
                      title,
                      src
                    }
                  }
                }
              }
            }
        `}
        render={data => (
            <SlickSlider className="artists">
                {renderArtists(data)}
            </ul>
        )}
     />
  )
}

export default Artists
