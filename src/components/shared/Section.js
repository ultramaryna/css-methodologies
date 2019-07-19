import React from "react";
import styled from 'styled-components';
import { breakpoints, colors } from '../../styles/vars';
import mixins from '../../styles/mixins';

const StyledSection = styled.section`
    padding: 40px 0;
    position: relative;
    background-color: ${props => props.color ? colors[props.color] : colors.grey};
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

const SectionContent = styled.div`
    ${mixins.wrapper}
`;

const Section = ({ children, isNewsletter }) => (
    <StyledSection as={isNewsletter ? NewsletterSection : ''}>
        <SectionContent>
            {children}
        </SectionContent>
    </StyledSection>
);

export default Section;
