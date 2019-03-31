import React from 'react'
import styled from 'styled-components'

export default function Hero(props) {
  return (
    <StyledDiv>
      <StyledMiddleDiv>
        <StyledH2>
          {props.title}
        </StyledH2>
        {props.extra && props.extra}
      </StyledMiddleDiv>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  margin-top: 50px;
  background-color: ${props => props.theme.colors.yellowOld};
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledMiddleDiv = styled.div`
  text-align: center;
`

const StyledH2 = styled.h2`
  line-height: 1.5;
  font-size: 28px;
  font-weight: 400;
`
