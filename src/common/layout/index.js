import React from 'react'
import {Helmet} from 'react-helmet'
import PropTypes from 'prop-types'
import Navigation from 'ui/navigation'
import menus from 'constants/menus'

export default function Layout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={props.description} />
        <meta name="keywords" content={props.keywords} />
        <meta name="author" content={props.author} />
        <title>{props.title}</title>
      </Helmet>
      <Navigation menus={menus} />
      {props.children}
    </React.Fragment>
  )
}

Layout.defaultProps = {
  title: 'Cari Kontrakan',
  description: 'Cari kontrakan yang sesuai dengan kebutuhan anda',
  keywords: 'cari kontrakan, sewa tempat tinggal',
  author: 'adiatma9024@gmail.com'
}

Layout.propTypes = {
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string
}
