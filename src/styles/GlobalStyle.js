import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

body {
  margin: 0;
  background: #ccc;
  font-size: 2rem;
}

:root {
  font-size: 62.5%;
}

* {
  margin: 0px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
`
