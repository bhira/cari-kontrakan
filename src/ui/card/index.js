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
  transition: 0.3s;
  border: solid 1px ${props => props.theme.colors.brown};
`

const StyledImage = styled.img`
  width: 100%;
`

const StyledDivCardContent = styled.div`
  padding: 2px 16px;
`