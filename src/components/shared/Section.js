import React from "react";
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/vars';
import Wrapper from './Wrapper';

const StyledSection = styled.section`
    padding: 40px 0;
    position: relative;
    background-color: ${props => props.color ? props.color : colors.grey};
    color: ${colors.white};
    @media (min-width: ${breakpoints.screenlg}) {
        padding: 80px 0;
    }
`;

const NewsletterSection = styled(StyledSection)`
    padding: 14px 0 30px;
    @media (min-width: ${breakpoints.bpMain}) {
        padding: 26px 0 70px;
    }
`;

const BannerSection = styled(StyledSection)`
    display: flex;
    align-items: flex-end;
    height: 200px;
    background-image: url(images/banner.jpg);
    background-size: cover;
    background-position: center;
    @media (min-width: ${breakpoints.bpMain}) {
        height: 360px;
    }

    ${Wrapper} {
        margin: 0;
    }
`;

const Section = ({ children, color, type }) => {
    const background = colors[color];
    return (
        <StyledSection 
            color={background} 
            as={type === 'banner' ? BannerSection : type === 'newsletter' ? NewsletterSection : ''}
        >
            <Wrapper>
                {children}
            </Wrapper>
        </StyledSection>
    );
};

export default Section;
