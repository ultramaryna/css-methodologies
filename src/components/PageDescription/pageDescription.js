import React from "react"
import { StaticQuery, graphql } from "gatsby"

const PageDescription = () => {
  return (
    <StaticQuery
      query={graphql`
        query descriptionQuery {
          descriptionJson {
            title,
            text
          }
        }
      `}
      render={data => (
        <>
          <h2 className="heading heading--turquoise">
            <span className="heading__content">{data.descriptionJson.title}</span>
          </h2>
          <p>{data.descriptionJson.text}</p>
        </>
      )}
    />
  )
}

export default PageDescription
