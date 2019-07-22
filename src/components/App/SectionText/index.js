import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Section from "../../shared/Section";
import Subtitle from "../../shared/Subtitle";

const SectionText = () => {
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
          <Section color="turquoise">
            <div>
                <Subtitle color="turquoiseLighter">
                    <span>{data.descriptionJson.title}</span>
                </Subtitle>
                <p dangerouslySetInnerHTML={{ __html: data.descriptionJson.text }} />
            </div>
        </Section>
      )}
    />
  )
}

export default SectionText;
