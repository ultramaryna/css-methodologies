import styled from 'styled-components';
import { typo, colors, gradients } from '../../styles/vars';
import { Link } from "gatsby";

const LinkBtn = styled(Link)`
    display: inline-block;
    min-width: 130px;
    padding: 15px 9px 13px;
    border-width: 5px;
    border-style: solid;
    font-family: ${typo.fontHeadings};
    font-weight: 900;
    line-height: 19px;
    color: ${colors.white};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    letter-spacing: 3px;
    cursor: pointer;
    transition: .2s ease-in;
    border-image: ${props => gradientTypes[props.type] || gradientTypes['primary']};
    border-image-slice: 1;
    &:hover {
        background-image: ${props => gradientTypes[props.type] || gradientTypes['primary']}
    }
`;

LinkBtn.defaultProps = {
    type: 'primary'
}

const gradientTypes = {
    primary: gradients.teal,
    secondary: gradients.violet,
    decorative: gradients.multicolor
}

export default LinkBtn;