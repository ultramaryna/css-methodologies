import styled from 'styled-components';
import { breakpoints } from '../../../../../styles/vars';
import Subtitle from '../../../../shared/Subtitle';

export const Item = styled.div`
    text-align: center;
    @media (min-width: ${breakpoints.screenmdd}) {
        display: flex !important;
        align-items: center;
        text-align: left;
    }
`;

export const Title = styled(Subtitle)`
    margin-bottom: 27px;
    font-size: 26px;
    @media (min-width: ${breakpoints.bpMain}) {
      font-size: 38px;
    }
`;

export const Bio = styled.p`
    margin-bottom: 25px;
    text-align: left;
`;

export const Content = styled.div`
    @media (min-width: ${breakpoints.screenmdd}) {
        margin-left: 60px;
    }
`;