import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body, html {
    -webkit-user-select: none;
    -moz-user-select: none; 
    -ms-user-select: none;
    user-select: none; // 드래그 방지
    margin: 0;
    padding: 0;
    overflow: hidden;
    height: 100vh;
    width: 100vw;
    
    overflow-x: hidden;
    scroll-behavior: smooth;
  }
  * {
    font-family: 'Noto Sans', sans-serif;
    outline: none;
  }
`;

export default GlobalStyle;
