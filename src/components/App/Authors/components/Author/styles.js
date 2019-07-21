import styled from 'styled-components';
import { breakpoints, typo } from '../../../../../styles/vars';

export const Item = styled.div`
    display: flex !important;
    align-items: center;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: column;
    }
`;

export const Image = styled.img`
    align-self: center;
    max-width: 164px;
    margin-right: 17px;
    @media (min-width: ${breakpoints.bpMain}) {
      margin: 0 0 14px 0;
      max-width: 271px;
    }
`;

export const Name = styled.h3`
    text-align: center;
    font-family: ${typo.fontHeadings};
    font-size: 22px;
    font-weight: 900;
    line-height: 28px;
    letter-spacing: 3px;
`;