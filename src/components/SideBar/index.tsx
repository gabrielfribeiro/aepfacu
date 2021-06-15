import React from 'react'
import { NavLink } from 'react-router-dom'

import { Container, Nav } from './styles'
import { ImExit } from 'react-icons/im'

interface ISidebarProps {
  isOpen: boolean
}

const Sidebar = ({ isOpen }: ISidebarProps) => {
  return (
    <Container isOpen={isOpen}>
      <Nav>
        <NavLink to="/institution" activeClassName="active">
          <span>Instituições</span>
        </NavLink>
        <NavLink to="/dashboard" activeClassName="active">
          <span>Relatório</span>
        </NavLink>
        <NavLink to="/student" activeClassName="active">
          <span>Cadastrar Aluno</span>
        </NavLink>
      </Nav>
      <Nav style={{ position: 'absolute', bottom: 50, width: '100%' }}>
        <NavLink to={'/'} activeClassName="active">
          <ImExit size="25px" />
          <span>Sair</span>
        </NavLink>
      </Nav>
    </Container>
  )
}

export default Sidebar
