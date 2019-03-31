import React from 'react'
import styled from 'styled-components'
import Container from 'ui/container'
import Columns from 'ui/columns'
import Paragraph from 'ui/paragraph'

export default function Footer(props) {
  return (
    <StyledDiv>
      <Container>
        <Columns>
          <Columns.Item>
            <Paragraph fontWeight={`500`}>Tentang Kami</Paragraph>
            <Paragraph>Lorem ipsume sit amet dolor</Paragraph>
          </Columns.Item>
        </Columns>
      </Container>
    </StyledDiv>
  )
}

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.yellow};
  padding: 20px 0;
`