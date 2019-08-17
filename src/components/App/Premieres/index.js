import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { PremieresWrapper, PremieresList, PremieresTitle } from './styles';
import Section from "../../shared/Section";
import Premiere from "./components/Premiere/index";

const Premieres = () => {
  function renderPremieres(data) {
    const { allPremieresJson: { edges: premieres } } = data;

    return (
      premieres.map((premiere, index) => {
        return (
          <Premiere premiere={premiere} key={index} />
        );
      })
    )
  }

  return (
    <StaticQuery
      query={graphql`
          query premieresQuery {
            allPremieresJson {
              edges {
                node {
                  title,
                  link,
                  images {
                    mobile,
                    desktop
                  }
                }
              }
            }
          }
      `}
      render={data => (
          <Section>
            <PremieresWrapper>
                <PremieresTitle>Premiery</PremieresTitle>
                <PremieresList>
                    {renderPremieres(data)}
                </PremieresList>
            </PremieresWrapper>
          </Section>
      )}
    />
  )
}

export default Premieres;
