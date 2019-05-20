import React from "react"
import { StaticQuery, graphql } from "gatsby"

import SlickSlider from './Slider/SlickSlider'

const Artists = () => {

    function renderArtists(data) {
        const
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
            <h2 className="heading">{data.descriptionJson.title}</h2>
            <p>{data.descriptionJson.text}</p>
        )}
     />
  )
}

export default Artists
