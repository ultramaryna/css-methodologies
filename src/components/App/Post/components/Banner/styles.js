import styled from 'styled-components';
import Title from '../../../../shared/Title';
import { breakpoints, colors } from '../../../../../styles/vars';
import mixins from '../../../../../styles/mixins';

export const Container = styled.div`
    height: 600px;
    background-size: cover;
    background-position: center;
`;

export const ArtistContainer = styled(Container)`
    ${mixins.wrapper};
    padding-top: 55px;
    padding-bottom: 49px;
    height: auto;
    background-color: ${colors.purple};
    @media (min-width: ${breakpoints.bpMain}) {
        padding-top: 150px;
        padding-bottom: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const Heading = styled(Title)`
    ${mixins.wrapper};
    position: relative;
    text-align: center;
    font-size: 36px;
    color: ${props => props.type === 'article' ? colors.teal : colors.pinkLighter};
    top: ${props => props.type === 'article' ? '212px' : 'auto'};
    @media (min-width: ${breakpoints.bpMain}) {
        font-size: ${props => props.type === 'article' ? '90px' : '70px'};
        text-align: left;
        top: ${props => props.type === 'article' ? '220px' : 'auto'};
        padding: 0 120px;
    }
`;