import styled from 'styled-components';
import vars from '../../styles/vars';

const LinkBtn = styled.a`
    display: inline-block;
    min-width: 130px;
    padding: 15px 9px 13px;
    border-width: 5px;
    border-style: solid;
    font-family: ${vars.fontHeadings};
    font-weight: 900;
    line-height: 19px;
    color: ${vars.white};
    text-transform: uppercase;
    text-decoration: none;
    text-align: center;
    letter-spacing: 3px;
    cursor: pointer;
    transition: .2s ease-in;
    border-image: ${props => gradients[props.type] || gradients['primary']};
    border-image-slice: 1;
    &:hover {
        background-image: ${props => gradients[props.type] || gradients['primary']}
    }
`;

LinkBtn.defaultProps = {
    type: 'primary'
}

const gradients = {
    primary: vars.gradientTeal,
    secondary: vars.gradientViolet,
    decorative: vars.gradientMulticolor
}

export default LinkBtn;