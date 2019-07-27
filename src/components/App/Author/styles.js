import styled from 'styled-components';
import { breakpoints, typo, colors, sizes } from '../../../styles/vars';

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

export const Content = styled.div`
    display: flex;
    align-items: center;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: column;
    }
`;

export const StandaloneItem = styled(Item)`
    color: ${colors.white};

    ${Image} {
        max-width: 240px;
        display: block;
        margin: 0 auto 30px;
        @media (min-width: ${breakpoints.bpMain}) {
          align-self: center;
          margin: 0 60px 0 0;
        }
    }

    ${Name} {
        margin-bottom: 26px;
        text-align: center;
        @media (min-width: ${breakpoints.bpMain}) {
          text-align: left;
        }
    }

    ${Content} {
        max-width: ${sizes.postWidth};
        margin: 0 auto;
        text-align: center;
        @media (min-width: ${breakpoints.bpMain}) {
          display: flex;
          align-items: center;
          flex-direction: row;
          text-align: left;
        }
    }
`;