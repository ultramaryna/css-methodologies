import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Title from "../../atoms/Title/Title";
import Section from "../../atoms/Section/Section";
import ShowsList from "../../molecules/ShowsList/ShowsList";
import ShowDates from "../../molecules/ShowDates/ShowDates";

class Repertoire extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeShow: false
    }
  }

  displayShows = (show) => {
    this.setState({ activeShow: show.name });
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
            <Section name="repertoire">
                <div className="o-repertoire">
                    <Title extraClass="o-repertoire_heading">Repertuar</Title>
                    <ShowsList data={data} onShowSelect={this.displayShows}/>
                    <div className="o-repertoire_showsWrapper">
                    {this.state.activeShow &&
                        <ShowDates showName={this.state.activeShow} data={data} />
                    }
                    {!this.state.activeShow &&
                        <p className="o-repertoire_choose">
                        Wybierz spektakl
                        <i className="icon-chevron o-repertoire_chooseIcon" />
                        </p>
                    }
                    </div>
                </div>
            </Section>
        )}
      />
    )
  }
}

export default Repertoire;