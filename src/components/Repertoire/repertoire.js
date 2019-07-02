import React from "react";
import { StaticQuery, graphql } from "gatsby";

import Shows from './components/Shows/shows';

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
              <li
                className="repertoire__select-item"
                onClick={() => this.displayShows(show)}
                key={show.name}
              >
                {show.name}
              </li>
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
          <div className="repertoire">
            <h2 className="heading--main repertoire__heading">Repertuar</h2>
            <ul className="repertoire__select">
              {this.renderShowNames(data)}
            </ul>
            <div className="repertoire__shows-wrapper">
              {this.state.activeShow &&
                <Shows showName={this.state.activeShow} data={data} />
              }
              {!this.state.activeShow &&
                <p className="repertoire__choose">
                  Wybierz spektakl
                  <i className="icon-chevron repertoire__choose-icon" />
                </p>
              }
            </div>
          </div>
        )}
      />
    )
  }
}

export default Repertoire;
