import styled from 'styled-components';
import vars from '../../../styles/vars';

const ScrollBtn = styled.button`
    position: absolute;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background-color: transparent;
    border: 0;
    font-size: 36px;
    color: ${vars.teal};
    z-index: 1;
`;

export default ScrollBtn;