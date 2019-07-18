import styled from 'styled-components';
import { typo, breakpoints } from '../../styles/vars';

const Title = styled.h1`
    font-family: ${typo.fontDecorative};
    font-weight: 400;
    font-size: 2.25rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    &:after {
        display: none;
    }
    @media (min-width: ${breakpoints.bpMain}) {
        font-size: 5.625rem;
    }
`;

export default Title;