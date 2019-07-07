import PropTypes from "prop-types"
import React from "react";
import { Link, StaticQuery } from "gatsby";
import styles from "./styles.scss";

const Logo = ({ src }) => {
    return (
        <StaticQuery
        query={graphql`
            query logoQuery {
                site {
                    siteMetadata {
                        logo
                    }
                }
            }
        `}
        render={data => (
            <Link to="/">
                <img src={data.site.siteMetadata.logo} alt="Musicale" className="a-logo" />
            </Link>
        )}
        />
    );
}

export default Logo
