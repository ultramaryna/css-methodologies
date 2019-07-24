import styled from 'styled-components';
import { breakpoints } from '../../styles/vars';

const Image = styled.img`
    display: block;
    max-width: 100%;
    height: auto;
    margin: 40px auto;
    @media (min-width: ${breakpoints.bpMain}) {
    margin: 47px auto;
    }
`;

export default Image;