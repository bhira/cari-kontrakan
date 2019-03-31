import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PropTypes from 'prop-types'

function uniqKey() {
  return String(Math.random())
}

/**
 * @param {String} props.path
 * @param {Boolean} props.exact
 * @param {ReactElement} props.component
 * @param {ReactElement|Function} props.wrapper
 * @return {ReactElement}
 */
function WithSubRoutes(props) {
  if (
    !(
      props.routes &&
      Array.isArray(props.routes) &&
      props.routes.length
    )
  ) {
    return React.createElement(
      Route,
      {
        path: props.path,
        key: uniqKey(),
        exact: props.exact,
        component: props.wrapper
          ? props.wrapper(props.component)
          : props.component,
      },
      null,
    )
  } else {
    return React.createElement(
      React.Fragment,
      {key: uniqKey()},
      React.createElement(Route, {
        path: props.path,
        exact: props.exact,
        component: props.wrapper
          ? props.wrapper(props.component)
          : props.component,
      }),
      props.routes.map(function(subroute) {
        return WithSubRoutes(subroute)
      }),
    )
  }
}

WithSubRoutes.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool,
  component: PropTypes.oneOf([PropTypes.element, PropTypes.function]),
  wrapper: PropTypes.function
}

/**
 * @param {Array} props.routes
 * @param {ReactElement} props.children
 * @return {ReactElement}
 */
export default function MainRoutes(props) {
  return React.createElement(
    Router,
    null,
    React.createElement(
      React.Fragment,
      null,
      props.children,
      props.routes.map(WithSubRoutes),
    ),
  )
}

MainRoutes.propTypes = {
  routes: PropTypes.array.isRequired
}
