import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: "Poppins-normal";
    src: url("/fonts/Poppins/Poppins-Light.ttf");
    font-style: normal;
    font-weight: 400;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins-medium";
    src: url("/fonts/Poppins/Poppins-Medium.ttf");
    font-style: medium;
    font-weight: 500;
    font-display: swap;
  }

  @font-face {
    font-family: "Poppins-bold";
    src: url("/fonts/Poppins/Poppins-Bold.ttf");
    font-style: Bold;
    font-weight: 700;
    font-display: swap;
  }


  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: Poppins-normal;
    font-size: 1.6rem;
    background-color: #A9A9A9;
  }
`;

export default GlobalStyle;
