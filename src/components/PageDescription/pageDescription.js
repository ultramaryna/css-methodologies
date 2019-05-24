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
        <div className="page-description">
          <h2 className="heading heading--turquoise">
            <span className="heading__content">{data.descriptionJson.title}</span>
          </h2>
          <p dangerouslySetInnerHTML={{ __html: data.descriptionJson.text }} />
        </div>
      )}
    />
  )
}

export default PageDescription
