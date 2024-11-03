import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  #root {
    margin: 0;
    padding: 0;
    width: 100%;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    color-scheme: light;
  }

  body {
    margin: 0;
    padding: 0;
    overflow-x: hidden; 
    background-color: #000000; 
    color: #ffffff; 
    width: 100%;
    display: block; 
    
  button {
    all: unset;
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
  }

  textarea {
    font: inherit;
    outline: none;
    border: none;
    background-color: transparent;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, select {
    font: inherit;
  }
`;

export default GlobalStyle;
