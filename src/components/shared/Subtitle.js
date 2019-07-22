import styled from 'styled-components';
import { breakpoints, typo, colors } from '../../styles/vars';
import mixins from '../../styles/mixins';

const Subtitle = styled.h2`
    position: relative;
    font-family: ${typo.fontHeadings};
    font-weight: 900;
    line-height: ${typo.lineHeight};
    font-size: 20px;
    text-transform: ${props => props.isLowercase ? 'none' : 'uppercase'};
    letter-spacing: 5.5px;
    margin-bottom: 30px;
    z-index: 1;
    color: ${colors.white};
    @media (min-width: ${breakpoints.bpMain}) {
        font-size: ${props => props.isLowercase ? '26px' : '32px' };
    }

    span {
        background-image: linear-gradient(to right, ${props => colors[props.color]}, ${props => colors[props.color]});
        ${mixins.underline('15px', '24px')}
    }
`;

Subtitle.defaultProps = {
    color: 'greyLighter'
}

export default Subtitle;