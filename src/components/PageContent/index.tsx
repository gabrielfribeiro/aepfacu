import React from 'react'
import { Header } from '../Header'
import Sidebar from '../SideBar'
import { Container, Main } from './styles'

interface IPageContent {
  children: React.ReactNode
}

const PageContent = ({ children }: IPageContent) => {
  return (
    <Container>
      <Header />
      <Sidebar isOpen />
      <Main>{children}</Main>
    </Container>
  )
}

export { PageContent }
