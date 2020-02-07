import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin:0;
    font-family: 'Montserrat', sans-serif;
    background: #DAE3E7;
    color: #434343;
  }

  p {
    font-family: Arial, sans-serif;
    font-size: 16px;
  }
`;
