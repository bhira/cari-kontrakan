import React from 'react'
import styled from 'styled-components'

export default function Container(props) {
  return (
    <StyledDiv>
      {props.children}
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-right: auto;
  margin-left:  auto;
  max-width: 960px;
  padding-right: 10px;
  padding-left:  10px;
`