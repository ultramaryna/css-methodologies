import styled from 'styled-components';
import { breakpoints } from '../../../styles/vars';

export const Container = styled.div`
    @media (min-width: ${breakpoints.bpMain}) {
        display: flex;
        justify-content: space-between;
    }
`;

export const Info = styled.div`
    max-width: 440px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    @media (min-width: ${breakpoints.bpMain}) {
        width: 480px;
        margin-left: 40px;
    }
`;

export const Text = styled.p`
    font-size: 18px;
    margin-bottom: 18px;
`;