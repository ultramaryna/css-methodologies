import styled from 'styled-components';
import { breakpoints } from '../../../styles/vars';

export const Container = styled.div`
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 0 30px;
    }
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 0 80px;
    }
`;