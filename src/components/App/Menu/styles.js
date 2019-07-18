import styled from 'styled-components';
import { colors, breakpoints, gradients, typo } from '../../../styles/vars';
import mixins from '../../../styles/mixins';
import { Link } from "gatsby";

export const StyledMenu = styled.nav`
    position: fixed;
    top: ${props => props.isOpen ? '41px' : '-100%'};
    left: 0;
    width: 100%;
    padding: 30px 0 50px;
    background-color: ${colors.warmGrey};
    transition: .3s ease-in-out;
    z-index: 19;
    @media (min-width: ${breakpoints.bpMain}) {
        position: relative;
        top: auto;
        padding-top: 0;
        padding-bottom: 0;
        ${mixins.wrapper}
    }
`;

export const MenuList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 100%;
    }
`;

export const MenuItem = styled.li`
    margin-bottom: 20px;
    text-align: center;
    @media (min-width: ${breakpoints.bpMain}) {
        margin-bottom: 0;

        &:nth-child(2) {
            margin-right: 120px;
        }
    }
`;

export const MenuLink = styled(Link)`
    font-family: ${typo.fontHeadings};
    text-transform: uppercase;
    text-decoration: none;
    color: ${colors.white};
    font-size: 18px;
    font-weight: 900;
    letter-spacing: 4px;
    line-height: 22px;
    text-align: center;

    &:hover {
        background-image: ${gradients.multicolor};
        ${mixins.gradientText}
    }
`;