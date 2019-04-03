import React from 'react'
import Map from 'lib/map'
import styled from 'styled-components'
import Footer from 'common/footer'

export default function Detail(props) {
  return (
    <React.Fragment>
      <Map />
      <StyledDiv>
        <StyledImg
          src={`http://danlawrie.com/wp-content/uploads/original.jpg`}
          alt={props.match.params.title}
        />
      </StyledDiv>
      <StyledFooter />
    </React.Fragment>
  )
}

const StyledDiv = styled.div`
  position: relative;
  top: 250px;
  height: 60vh;
  width: 900px;
  margin: 0 auto;
  background-color: ${props => props.theme.colors.yellow};
  border-radius: 10px;
  overflow: hidden;
  z-index: 2;
`

const StyledImg = styled.img`
 width: 100%;
 height: 100%;
`

const StyledFooter = styled(Footer)`
  margin-top: 30%
`
