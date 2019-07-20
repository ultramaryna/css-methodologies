import styled from 'styled-components';
import { breakpoints, colors, gradients, typo, vars } from '../../../../../styles/vars';

export const StyledPremiere = styled.li`
    position: relative;
    margin-bottom: 20px;
    align-self: center;
    text-align: center;
    @media (min-width: ${breakpoints.bpMain}) {
        width: calc((100% - 80px) / 5);
    }
    @media (min-width: ${breakpoints.screenlg}) {
        width: calc((100% - 240px) / 5);
    }
`;

export const Picture = styled.picture`
    position: relative;
    display: inline-block;
    z-index: 1;
    overflow: hidden;
    transition: ${vars.transition};
    &:after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-image: ${gradients.multicolor};
        opacity: 0;
        transition: ${vars.transition};
    }
    &:hover {
        &:after {
            opacity: .7;
        }
    }
`;

export const Img = styled.img`
    max-width: 100%;
    transition: ${vars.transition};
    ${Picture}:hover & {
        transform: scale(1.2);
    }
`;

export const Title = styled.h3`
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    font-family: ${typo.fontHeadings};
    color: ${colors.white};
    text-transform: uppercase;
    white-space: nowrap;
    transition: ${vars.transition};
    ${StyledPremiere}:hover & {
        opacity: 1;
    }
    &:hover + ${Picture} {
        &:after {
            opacity: .7;
        }
    }
    @media (min-width: ${breakpoints.bpMain}) {
        left: auto;
        right: 0;
        writing-mode: vertical-lr;
    }
`;