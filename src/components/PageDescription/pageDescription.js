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
          <h2 className="heading">{data.descriptionJson.title}</h2>
          <p>{data.descriptionJson.text}</p>
        </>
      )}
    />
  )
}

export default PageDescription
