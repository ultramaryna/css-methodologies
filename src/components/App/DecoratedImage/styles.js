import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles/vars';

export const Container = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    padding-top: 25px;
    margin-bottom: 25px;
    &:before {
        content: '';
        position: absolute;
        width: 198px;
        height: 198px;
        left: calc(50% + 18px);
        top: calc(50% + 4px);
        transform: translate(-50%, -50%) rotate(58deg);
        background-color: ${colors.purpleLighter};
        @media (min-width: ${breakpoints.bpMain}) {
            width: 289px;
            height: 289px;
        }
    }
`;

export const Image = styled.img`
    width: 260px;
    margin: 0 auto;
    z-index: 1;
    align-self: center;
    @media (min-width: ${breakpoints.bpMain}) {
        width: 380px;
    }
`;