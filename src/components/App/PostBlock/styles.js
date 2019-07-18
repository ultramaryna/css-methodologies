import styled from 'styled-components';
import { colors, breakpoints } from '../../../styles/vars';
import Subtitle from '../../shared/Subtitle';
import LinkBtn from '../../shared/LinkBtn';

export const StyledPostBlock = styled.article`
    margin-bottom: 43px;
    &:last-of-type {
        margin-bottom: 0;
    }
    @media (min-width: ${breakpoints.bpMain}) {
        width: calc((100% - 80px) / 3);
    }
    @media (min-width: ${breakpoints.screenlg}) {
        width: calc((100% - 120px) / 3);
    }
`;

export const Img = styled.img`
    max-width: 100%;
    margin-bottom: 20px;
    align-self: center;
    @media (min-width: ${breakpoints.bpMain}) {
      margin-bottom: 33px;
    }
`;

export const Title = styled(Subtitle)`
    font-size: 22px;
    line-height: 28px;
    letter-spacing: 3px;
    color: ${colors.white};
    margin-bottom: 20px;
    text-transform: none;
    @media (min-width: ${breakpoints.bpMain}) {
      font-size: 26px;
      line-height: 32px;
      min-height: 64px;
      margin-bottom: 36px;
    }
`;

export const Text = styled.p`
    margin-bottom: 21px;
`;

export const Link = styled(LinkBtn)`
    align-self: flex-start;
`;

export const Content = styled.div``;

export const HorizontalPostBlock = styled(StyledPostBlock)`
    display: flex;
    flex-direction: column;
    margin-bottom: 38px;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: row;
        margin-bottom: 60px;
        width: 100%;
    }

    ${Content} {
        display: flex;
        flex-direction: column;
        @media (min-width: ${breakpoints.bpMain}) {
            margin-left: 20px;
        }
        @media (min-width: ${breakpoints.screenlg}) {
            margin-left: 60px;
        }
    }

    ${Img} {
        margin-bottom: 25px;
    }

    ${Title} {
        font-size: 20px;
        margin-bottom: 21px;
        min-height: 0;
        text-transform: uppercase;
        @media (min-width: ${breakpoints.bpMain}) {
          font-size: 26px;
          line-height: 32px;
        }
    }
`;

