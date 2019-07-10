import React from "react"
import { StaticQuery, graphql } from "gatsby"
import "./styles.scss";

import Premiere from '../../molecules/Premiere/Premiere';
import Section from '../../atoms/Section/Section';
import Title from '../../atoms/Title/Title';

const Premieres = ({ premieres }) => {

  function renderPremieres(data) {
    const { allPremieresJson: { edges: premieres } } = data;

    return (
      premieres.map(premiere => {
        return (
            <Premiere
              title={premiere.node.title}
              image={premiere.node.images.mobile}
              imageDesktop={premiere.node.images.desktop}
              link={premiere.node.link}
            />
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
        <Section name="premieres">
          <div className="o-premieres">
            <Title extraClass="o-premieres_title" level="2">Premiery</Title>
            <div className="o-premieres_list">
              {renderPremieres(data)}
            </div>
          </div>
        </Section>
        )
      }
    />
  );
}

export default Premieres
