import React from 'react'
import ReactDOM from 'react-dom'
import {createGlobalStyle, ThemeProvider} from 'styled-components'
import routes from './route.web'
import MainRouter from './lib/react-router'
import theme from './constants/theme'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${props => props.theme.fontFamily}
  }
`

function App() {
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        <GlobalStyle />
        <MainRouter routes={routes} />
      </React.Fragment>
    </ThemeProvider>
  )
}

const rootElement = document.getElementById('root')

if (rootElement == null) {
  throw new Error('no rootElement')
} else {
  ReactDOM.render(<App />, rootElement)
}
