import React from 'react'
import { Container, IconContainer, SearchContainer } from './styles'
import { FaRegUserCircle } from 'react-icons/fa'

const Header = () => {
  return (
    <Container>
      <SearchContainer>
        <h1>Unicesumar</h1>
      </SearchContainer>
      <IconContainer>
        <FaRegUserCircle size="50px" color="white" />
      </IconContainer>
    </Container>
  )
}

export { Header }
