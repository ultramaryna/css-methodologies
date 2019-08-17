import styled from 'styled-components';
import { breakpoints, typo, colors } from '../../../styles/vars';

export const Container = styled.div`
     @media (min-width: ${breakpoints.screenmdd}) {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`;

export const Title = styled.h2`
    @media (min-width: ${breakpoints.screenmdd}) {
        flex: 1 1 100%;
        z-index: 2;
    }

    @media (min-width: ${breakpoints.screenlg}) {
        font-size: 110px;
    }
`;

export const Select = styled.ul`
    background-color: ${colors.lighterGrey};
    list-style-type: none;
    padding: 20px;
    max-height: 140px;
    overflow-y: auto;

    @media (min-width: ${breakpoints.screenmdd}) {
        order: 2;
        width: 35%;
        max-width: 440px;
        max-height: 326px;
        padding-top: 60px;
        position: relative;
        top: -80px;
    }

    &::-webkit-scrollbar {
        width: 22px;
    }

    &::-webkit-scrollbar-track {
        background: ${colors.grey};
    }

    &::-webkit-scrollbar-thumb {
        background: ${colors.tealLighter};
    }
`;

export const SelectItem = styled.li`
    font-family: ${typo.fontHeadings};
    font-size: 18px;
    letter-spacing: 4.5px;
    margin-bottom: 20px;
    cursor: pointer;
    @media (min-width: ${breakpoints.bpMain}) {
        font-size: 22px;
        margin-bottom: 10px;
    }

    &:last-of-type {
        margin-bottom: 0;
    }
`;

export const ShowsWrapper = styled.div`
    margin-top: 50px;
    @media (min-width: ${breakpoints.screenmdd}) {
        margin: 10px 20px 0 0;
        width: calc(60% - 20px);
    }
`;

export const Choose = styled.p`
    font-family: ${typo.fontHeadings};
    font-size: 26px;
`;

export const ChooseIcon = styled.i`
    margin-left: 5px;
    &:before {
        transform: rotate(180deg);
        @media (min-width: ${breakpoints.screenmdd}) {
            transform: rotate(-90deg);
        }
    }
`;