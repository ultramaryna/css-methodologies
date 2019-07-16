import { createGlobalStyle } from 'styled-components';
import vars from "./vars";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${vars.fontDefault};
    font-size: 1rem;
    font-weight: 400;
    color: ${vars.textColor};
    line-height: ${vars.lineHeight};
    box-sizing: border-box;
}
`;

export default GlobalStyle;