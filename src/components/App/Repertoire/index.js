import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Section from '../../shared/Section';
import { Container, Title, Select, SelectItem, Choose, ChooseIcon, ShowsWrapper } from './styles';

import Shows from './components/Shows/index';

class Repertoire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeShow: false
    }
  }

  displayShows(show) {
    this.setState({ activeShow: show.name });
  }

  renderShowNames(data) {
    const { allRepertoireJson: { edges: shows } } = data;

    return (
        shows.map((item) => {
            const { node: show } = item;
            return (
              <SelectItem
                onClick={() => this.displayShows(show)}
                key={show.name}
              >
                {show.name}
              </SelectItem>
            );
        })
    )
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query repertoireQuery {
            allRepertoireJson {
              edges {
                node {
                  name
                  theatres {
                    name
                    shows
                  }
                }
              }
            }
          }
        `}
        render={data => (
            <Section color="teal">
                <Container>
                    <Title className="title">Repertuar</Title>
                    <Select>
                    {this.renderShowNames(data)}
                    </Select>
                    <ShowsWrapper>
                    {this.state.activeShow &&
                        <Shows showName={this.state.activeShow} data={data} />
                    }
                    {!this.state.activeShow &&
                        <Choose>
                        Wybierz spektakl
                        <ChooseIcon className="icon-chevron" />
                        </Choose>
                    }
                    </ShowsWrapper>
                </Container>
            </Section>
        )}
      />
    )
  }
}

export default Repertoire;