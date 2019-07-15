import React from "react";
import { Link, StaticQuery } from "gatsby";
import logo from '../../../_assets/images/logo.svg';

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
                <img src={logo} alt="Musicale" className="a-logo" />
            </Link>
        )}
        />
    );
}

export default Logo
