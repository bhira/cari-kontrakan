import Home from 'pages/home'
import About from 'pages/about'
import Detail from 'pages/detail'

export default [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/detail/:id/:title',
    exact: true,
    component: Detail,
  },
  {
    path: '/about',
    exact: true,
    component: About
  }
]