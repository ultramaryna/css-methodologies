import styled from 'styled-components';
import { breakpoints, colors, gradients, typo, vars } from '../../../styles/vars';
import mixins from '../../../styles/mixins';

export const PremieresWrapper = styled.div`
    color: ${colors.white};
`;

export const PremieresList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: center;
    list-style-type: none;
    z-index: 1;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: row;
        justify-content: space-between;
    }
`;

export const PremieresTitle = styled.h2`
    position: absolute;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    font-family: ${typo.fontDecorative};
    font-size: 128px;
    line-height: 118px;
    text-align: center;
    width: 128px;
    word-break: break-all;
    opacity: 1;
    background-image: linear-gradient(to right, ${gradients.black});
    transition: ${vars.transition};
    z-index: 2;
    ${mixins.gradientText}
    ${PremieresWrapper}:hover & {
        opacity: 0;
        display: none;
    }
    @media (min-width: ${breakpoints.bpMain}) {
        width: 100%;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        word-break: normal;
        letter-spacing: 4px;
        line-height: 1;
        background-image: linear-gradient(to bottom, ${gradients.black});
    }
    @media (min-width: ${breakpoints.screenlg}) {
        font-size: 210px;
    }
`;