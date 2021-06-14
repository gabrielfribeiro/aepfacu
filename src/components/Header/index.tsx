import React from 'react'
import { Container, IconContainer, SearchContainer, Search } from './styles'
import { FaRegUserCircle } from 'react-icons/fa'
import { Form } from '@unform/web'

const Header = () => {
  const handleSubmit = () => {
    console.log('Busca')
  }

  return (
    <Container>
      <SearchContainer>
        <Form onSubmit={handleSubmit}>
          <Search placeholder="Pesquisa..." />
        </Form>
      </SearchContainer>
      <IconContainer>
        <FaRegUserCircle size="50px" color="white" />
      </IconContainer>
    </Container>
  )
}

export { Header }
