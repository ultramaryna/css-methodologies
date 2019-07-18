import styled from 'styled-components';
import { breakpoints, colors, sizes } from '../../../styles/vars';
import mixins from '../../../styles/mixins';
import LinkBtn from "../../shared/LinkBtn";
import Title from "../../shared/Title";

export const Section = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: url(../images/hero.jpg);
    background-size: cover;
    background-position: center;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 264px;
        background: linear-gradient(180deg, rgba(38,42,44,0) 0%, #262A2C 78.16%, #262A2C 100%);
        z-index: -1;
    }
`;

export const Content = styled.div`
    position: relative;
    padding: 213px ${sizes.marginMobile} 0;
    @media(min-width: ${breakpoints.bpMain}) {
        padding: 220px ${sizes.marginDesktop} 0;
    }
`;

export const ScrollBtn = styled.button`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border: 0;
    font-size: 36px;
    color: ${colors.teal};
    z-index: 1;
`;

export const ReadBtn = styled(LinkBtn)`
    display: none;
    @media(min-width: ${breakpoints.bpMain}) {
        display: inline-block;
    }
`;

export const HeroTitle = styled(Title)`
    color: ${colors.violet};
    background-image: linear-gradient(135deg, rgba(159,70,187,8), rgba(159,70,187,0));
    ${mixins.gradientText}
    text-align: center;
    @media(min-width: ${breakpoints.bpMain}) {
        text-align: left;
        margin-bottom: 53px;
    }
`;