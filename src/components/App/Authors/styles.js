import styled from 'styled-components';
import { breakpoints } from '../../../styles/vars';
import Subtitle from '../../shared/Subtitle';

export const Container = styled.div`
    padding: 0 35px;
    @media (min-width: ${breakpoints.screenmd}) {
        padding: 0 60px;
    }
`;

export const Title = styled(Subtitle)`
    text-align: center;
    margin-bottom: 17px;
    @media (min-width: ${breakpoints.bpMain}) {
        margin-bottom: 30px;
    }
`;