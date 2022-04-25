import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --light-gray: #A2A2A2;
    --dark-gray: #3C3C3C;
    --gray: #7C7C7C;
    --stroke-gray: #E6E6E6;
    --primary-red: #F54A48;
    --orange-error: #FA982F;
    --green-confirmation: #34C38F;

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

  }
  
  html {
    font-size: 62.5%;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  
  button {
    cursor: pointer;
  }
`