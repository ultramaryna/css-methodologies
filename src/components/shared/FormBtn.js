import styled from 'styled-components';
import { colors } from '../../styles/vars';

const FormBtn = styled.button`
    border: 0;
    padding: 15px 47px;
    align-self: flex-start;
    font-size: 14px;
    font-family: inherit;
    font-weight: 900;
    line-height: 19px;
    letter-spacing: 3px;
    color: ${colors.white};
    background-color: ${props => props.variant === 'newsletter' ? colors.brown : colors.blueLighter};
    text-transform: uppercase;
    cursor: pointer;
    transition: .2s ease-in;
`;

export default FormBtn;