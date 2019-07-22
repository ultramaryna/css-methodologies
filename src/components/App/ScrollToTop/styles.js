import styled from 'styled-components';
import { colors } from '../../../styles/vars';

export const Button = styled.button`
    position: fixed;
    bottom: 20px;
    right: 40px;
    width: 43px;
    height: 43px;
    box-shadow: 3px 2px 4px 0 rgba(0,0,0,0.5);
    border: 0;
    background-color: ${colors.grey};
    transform: rotate(45deg);
    z-index: 101;
`;

export const Icon = styled.i`
    color: ${colors.white};
    font-size: 24px;
    &:before {
      transform: rotate(135deg);
    }
`;