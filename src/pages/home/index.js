import React from 'react'
import styled from 'styled-components'
import Layout from '../../common/layout'
import Button from '../../ui/button'

function Hero() {
  return (
    <StyledDiv>
      <StyledMiddleDiv>
        <StyledH2>
          Temukan kontrakan/rumah sewa yang sesuai dengan kebutuhan anda
        </StyledH2>
        <Button>Daftarkan Kontrakan</Button>
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
  font-size: 20x;
  font-weight: 400;
`

export default function() {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}
