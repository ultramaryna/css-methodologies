import styled from 'styled-components';
import { colors, breakpoints } from '../../styles/vars';

const Input = styled.input`
    padding: 14px 20px;
    margin-bottom: 15px;
    border: 3px solid ${props => props.variant === 'newsletter' ? colors.brown : colors.blueLighter};
    background-color: transparent;
    font-family: $font-text;
    font-weight: 900;
    font-size: 16px;
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 15px 26px;
    }

    &::placeholder {
      color: ${props => props.variant === 'newsletter' ? colors.brown : colors.blueLighter};
    }
`;

export default Input;