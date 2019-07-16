import styled from 'styled-components';
import vars from '../../../styles/vars';

const Content = styled.div`
    position: relative;
    padding: 213px ${vars.marginMobile} 0;
    @media (min-width: ${vars.bpMain}) {
        padding: 220px ${vars.marginDesktop} 0;
    }
`;

export default Content;