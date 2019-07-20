import styled from 'styled-components';
import { breakpoints, sizes } from '../../styles/vars';

const Wrapper = styled.div`
    padding: 0 ${sizes.marginMobile};
    max-width: ${sizes.contentWidth};
    margin: 0 auto;
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 0 30px;
    }
    @media (min-width: ${breakpoints.screenLg}) {
        padding: 0 ${sizes.marginDesktop};
    }
`;

export default Wrapper;