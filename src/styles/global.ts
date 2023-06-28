import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['yellow-500']};
  }

  body {
    background: ${(props) => props.theme['brown-200']};
    color: ${(props) => props.theme['brown-800']};
    -webkit-font-smoothing: antialiased;

    text-decoration: none;
  }

  body, input, textarea, button {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }
`
