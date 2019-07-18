import styled from 'styled-components';
import { breakpoints } from '../../../styles/vars';

export const StyledPosts = styled.div`
    @media (min-width: ${breakpoints.bpMain}) {
        display: flex;
        justify-content: space-between;
        ${props => props.isHorizontal &&
            'flex-direction: column;'
        }
    }
`;