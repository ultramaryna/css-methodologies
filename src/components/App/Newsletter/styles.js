import styled from 'styled-components';
import { breakpoints, colors } from '../../../styles/vars';
import Input from '../../shared/Input';
import FormBtn from '../../shared/FormBtn';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    @media (min-width: ${breakpoints.bpMain}) {
        flex-direction: row;
        justify-content: flex-end;
    }
`;

export const NewsletterInput = styled(Input)`
    @media (min-width: ${breakpoints.bpMain}) {
        margin-bottom: 0;
        width: 420px;
        border-width: 5px;
        font-size: 18px;
    }
`;

export const Btn = styled(FormBtn)`
    @media (min-width: ${breakpoints.bpMain}) {
        margin-left: 40px;
        align-self: stretch;
        font-size: 18px;
    }
`;

export const Title = styled.h2`
    margin-bottom: 13px;
    color: ${colors.brown};
    @media (min-width: ${breakpoints.bpMain}) {
        margin-bottom: -10px;
    }
`;