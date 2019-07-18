import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/vars';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    background-color: ${colors.warmGrey};
    padding: 4px 21px 4px 0;
    z-index: 20;
    overflow: visible;
    @media (min-width: ${breakpoints.bpMain}) {
        height: 60px;
        padding: 0;
    }
`;

export const Logo = styled.img`
    position: absolute;
    left: 0;
    top: ${props => props.isMenuOpen ? '256px' : 0};
    height: 90px;
    width: auto;
    z-index: 21;
    transition: .25s ease-in-out 0s;
    ${props => props.isMenuOpen &&
        `transform: rotate(360deg);
        transition-delay: .1s;`
    };  
    @media (min-width: ${breakpoints.bpMain}) {
        left: 50%;
        height: 125px;
        transform: translateX(-50%);
    }
`;

export const ToggleBtn = styled.button`
    font-size: 28px;
    color: ${colors.white};
    margin: 0 21px 0 auto;
    padding: 0;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    @media (min-width: ${breakpoints.bpMain}) {
        display: none;
    }
`;

