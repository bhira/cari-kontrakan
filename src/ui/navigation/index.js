import React from 'react'
import styled from 'styled-components'
import Container from '../container'

function NavigationItem(props) {
  if (
    props.menus &&
    Array.isArray(props.menus) &&
    props.menus.length
  ) {
    return props.menus.map(function(menu, index) {
      return (
        <StyledLi key={String(index)}>
          <StyledLink href={menu.href} target={menu.target}>
            {menu.title}
          </StyledLink>
        </StyledLi>
      )
    })
  }

  return null
}

export default function Navigation(props) {
  return (
    <StyledNav>
      <Container>
        <StyledUl>
          <NavigationItem menus={props.menus} />
        </StyledUl>
      </Container>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  background-color: ${props => props.theme.colors.yellow};
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
`

const StyledUl = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
`

const StyledLi = styled.li`
  float: left;
`

const StyledLink = styled.a`
  display: block;
  padding: 14px 16px;
  text-decoration: none;
  color: ${props => props.theme.colors.black};
  font-size: 18px;
`
