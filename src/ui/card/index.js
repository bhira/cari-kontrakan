import React from 'react'
import styled from 'styled-components'

export default function Card(props) {
  return (
    <StyledDivCard>
      <StyledImage src={props.imageSrc} alt={props.imageAlt} />
      <StyledDivCardContent>
        {props.children}
      </StyledDivCardContent>
    </StyledDivCard>
  )
}

const StyledDivCard = styled.div`
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
`

const StyledImage = styled.img`
  width: 100%;
`

const StyledDivCardContent = styled.div`
  padding: 2px 16px;
`