'use client'

import { createGlobalStyle } from 'styled-components'

const styled = { createGlobalStyle }

export const GlobalStyles = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    /* font-family: 'Montserrat'; */
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    overflow: auto;
    margin: 0;
    padding: 0;
    display: flex;
    width: 100vw;
    height: 100vh;
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    display: flex;
    padding: 0;
    margin: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
  }

  body,
  input,
  textarea,
  button {
    /* font-family: 'Montserrat'; */
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }
  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  a {
    text-decoration: none;
  }
`
