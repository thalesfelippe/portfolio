import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: #0a192f;
    color: #ccd6f6;
    overflow: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5, h6 {
    color: #64ffda;
  }
`;
