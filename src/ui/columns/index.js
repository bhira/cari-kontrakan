import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

export default function Columns(props) {
  const children = React.Children.map(props.children, function (child) {
    if (React.isValidElement(child)) {
      return React.cloneElement(child)
    }

    return null
  })

  return (
    <StyledDivColumns {...props}>
      {children}
    </StyledDivColumns>
  )
}

Columns.defaultProps = {
  templateColumn: 2,
  templateColumnSize: '2fr',
  columnGap: '10px',
  rowGap: '10px'
}

Columns.Item = ({ to, children }) => {
  return (
    <StyledDivColumnsItem to={to}>
      {children}
    </StyledDivColumnsItem>
  )
}

Columns.Item.defaultProps = {
  to: ``
}

Columns.Item.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
    pathname: PropTypes.string,
    search: PropTypes.string,
    hash: PropTypes.string,
    state: PropTypes.any
  })])
}

const StyledDivColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => `${props.templateColumn}, ${props.templateColumnSize}`});
  grid-template-rows: auto;
  grid-column-gap: ${props => props.columnGap};
  grid-row-gap: ${props => props.rowGap};
`

const StyledDivColumnsItem = styled(Link)`
  text-decoration: none;
`
