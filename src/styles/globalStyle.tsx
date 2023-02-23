import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  // Reset CSS
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  @font-face {
    font-family: 'SUIT';
  }
  
`;

export default GlobalStyle;
