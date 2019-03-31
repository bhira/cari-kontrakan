import React from 'react'
import styled from 'styled-components'

export default function Columns(props) {
  const children = React.Children.map(props.children, function(child) {
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

Columns.Item = function(props) {
  return (
    <StyledDivColumnsItem>
      {props.children}
    </StyledDivColumnsItem>
  )
}

const StyledDivColumns = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => `${props.templateColumn}, ${props.templateColumnSize}`});
  grid-template-rows: auto;
  grid-column-gap: ${props => props.columnGap};
  grid-row-gap: ${props => props.rowGap};
`

const StyledDivColumnsItem = styled.div``
