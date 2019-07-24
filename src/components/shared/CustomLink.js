import styled from 'styled-components';
import { Link } from 'gatsby';
import { typo, colors } from '../../styles/vars';
import mixins from '../../styles/mixins';

const CustomLink = styled(Link)`
    color: ${typo.fontText};
    position: relative;
    text-decoration: none;
    background-image: linear-gradient(to right, ${props => colors[props.color]}, ${props => colors[props.color]});
    ${mixins.underline('10px', '10px')};
    &:hover, &:visited {
        color: ${typo.textColor};
    }
`;

CustomLink.defaultProps = {
    color: 'tealLighter'
}

export default CustomLink;