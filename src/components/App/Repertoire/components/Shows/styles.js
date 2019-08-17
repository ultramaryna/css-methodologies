import styled from 'styled-components';
import { breakpoints, typo, colors } from '../../../../../styles/vars';
import Subtitle from '../../../../shared/Subtitle';
import { Accordion, AccordionItemHeading, AccordionItemButton } from 'react-accessible-accordion';

export const Title = styled(Subtitle)`
    @media (min-width: ${breakpoints.bpMain}) {
        margin-bottom: 20px;
    }
`;

export const Theatres = styled(Accordion)`
    list-style-type: none;
`;

export const TheatreName = styled(AccordionItemHeading)`
    font-size: 18px;
    font-family: ${typo.fontHeadings};
    font-weight: 400;
    text-transform: uppercase;
    letter-spacing: 4.5px;
    margin-bottom: 22px;
    @media (min-width: ${breakpoints.screenlg}) {
        font-size: 22px;
    }
`;

export const TheatreExpand = styled(AccordionItemButton)`
    position: relative;
    padding-right: 30px;
    &:after {
        content: '\\E800';
        font-family: 'fontello';
        position: absolute;
        right: 0;
        top: 0;
    }
`;

export const MonthsList = styled.ul`
    list-style-type: none;
`;

export const MonthItem = styled.li`
    @media (min-width: ${breakpoints.bpMain}) {
        display: flex;
        padding-left: 33px;
    }
`;

export const ShowsList = styled.ul`
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    border-bottom: 2px solid ${colors.tealLighter};
    padding: 0 0 20px 20px;
    margin-bottom: 30px;
    @media (min-width: ${breakpoints.bpMain}) {
        border-bottom: 0;
        padding-bottom: 18px;
        margin-bottom: 0
    }
`;

export const ShowsMonth = styled.h4`
    font-family: ${typo.fontHeadings};
    font-size: 18px;
    margin-bottom: 28px;
    @media (min-width: ${breakpoints.bpMain}) {
        min-width: 120px;
        font-size: 22px;
    }
`;

export const ShowsDate = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 61px;
    height: 61px;
    border-radius: 100%;
    background-color: ${colors.white};
    font-family: ${typo.fontHeadings};
    color: ${colors.black};
    margin: 0 20px 20px 0;
    line-height: .8;
`;

export const ShowsDay = styled.span`
    font-size: 26px;
    line-height: 1;
`;