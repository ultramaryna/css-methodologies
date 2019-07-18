import { createGlobalStyle } from 'styled-components';
import { typo, colors } from "./vars";
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
`;

export default GlobalStyle;