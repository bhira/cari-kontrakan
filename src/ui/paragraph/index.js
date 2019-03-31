import React from 'react'
import styled from 'styled-components'

export default function Paragraph(props) {
  return (
    <StyledP {...props}>
      {props.children}
    </StyledP>
  )
}

const StyledP = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color: ${props => props.fontColor ? props.fontColor : props.theme.colors.black};
`

Paragraph.defaultProps = {
  fontSize: '15px',
  fontWeight: '400'
}
