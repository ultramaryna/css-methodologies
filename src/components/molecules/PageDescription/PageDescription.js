import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Section from "../../atoms/Section/Section";
import Subtitle from "../../atoms/Subtitle/Subtitle";
import Text from "../../atoms/Text/Text";

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
          <Section name="description">
            <div className="m-pageDescription">
                <Subtitle color="turquoise">
                    {data.descriptionJson.title}
                </Subtitle>
                <p dangerouslySetInnerHTML={{ __html: data.descriptionJson.text }} />
            </div>
        </Section>
      )}
    />
  )
}

export default PageDescription;