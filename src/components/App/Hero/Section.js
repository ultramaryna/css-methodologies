import styled from 'styled-components';

const Section = styled.section`
    position: relative;
    width: 100%;
    min-height: 100vh;
    background-image: url(../images/hero.jpg);
    background-size: cover;
    background-position: center;
    z-index: 1;
    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 264px;
        background: linear-gradient(180deg, rgba(38,42,44,0) 0%, #262A2C 78.16%, #262A2C 100%);
        z-index: -1;
    }
`;

export default Section;