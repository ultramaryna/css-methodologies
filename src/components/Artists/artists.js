import React from "react"
import { StaticQuery, graphql } from "gatsby"

const Artists = () => {
  return (
      <>
        <h2 className="heading">{data.descriptionJson.title}</h2>
        <p>{data.descriptionJson.text}</p>
      </>

  )
}

export default Artists
