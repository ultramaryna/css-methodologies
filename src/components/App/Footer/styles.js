import styled from 'styled-components';
import { breakpoints, colors, typo } from '../../../styles/vars';
import mixins from '../../../styles/mixins';
import Wrapper from '../../shared/Wrapper';

export const StyledFooter = styled.footer`
    background-color: ${colors.grey};
    color: ${colors.white};
    padding-top: 40px;
    padding-bottom: 40px;
    @media (min-width: ${breakpoints.bpMain}) {
        padding-top: 67px;
        padding-bottom: 50px;
    }
`;

export const Content = styled(Wrapper)`
    @media (min-width: ${breakpoints.bpMain}) {
        display: flex;
    }
`;

export const Text = styled.p`
    margin-bottom: 24px;
    @media (min-width: ${breakpoints.bpMain}) {
        width: 50%;
    }
`;

export const Version = styled.p`
    font-family: ${typo.fontHeadings};
    font-size: 20px;
    font-weight: 900;
    line-height: 36px;
    letter-spacing: 3px;
    text-transform: uppercase;
    @media (min-width: ${breakpoints.bpMain}) {
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;