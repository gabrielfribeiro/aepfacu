import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

export default createGlobalStyle`
  ${reset}

   * {
    box-sizing: border-box;
  }

  body, input, button {
    font: 400 1rem 'Poppins', sans-serif
  }

  h1 {
    font-size: 2rem
  }
  
  h2 {
    font-size: 1.5rem
  }
`
