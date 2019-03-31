import React from 'react'
import ReactDOM from 'react-dom'
import routes from './route.web'
import MainRouter from './lib/react-router'

function App() {
  return React.createElement(
    MainRouter,
    {routes},
    null
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
