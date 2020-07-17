import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    font-family: "Gothic A1";
  }
  *,
  *::before,
  *::after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: ${({ theme }) => theme.palette.dark};
    color: ${({ theme }) => theme.palette.primary};
    min-height: 100vh;
  }
  button {
    padding: 0;
    cursor: pointer;
  }
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
`

export default GlobalStyle
