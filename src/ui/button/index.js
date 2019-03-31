import React from 'react'
import styled from 'styled-components'

export default function Button(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

const StyledButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  border: none;
  cursor: pointer;
  font-size: 20px;
  border-radius: 4px;
`
