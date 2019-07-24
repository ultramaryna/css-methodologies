import { createGlobalStyle } from 'styled-components';
import { typo, colors, breakpoints } from "./vars";
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    font-family: ${typo.fontDefault};
    font-size: 1rem;
    font-weight: 400;
    color: ${colors.textColor};
    line-height: ${typo.lineHeight};
    box-sizing: border-box;
  }

  strong {
    font-weight: 900;
  }

  .title {
    font-family: ${typo.fontDecorative};
    font-weight: 400;
    font-size: 2.25rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    &:after {
        display: none;
    }
    @media (min-width: ${breakpoints.bpMain}) {
        font-size: 5.625rem;
    }
  }
`;

export default GlobalStyle;