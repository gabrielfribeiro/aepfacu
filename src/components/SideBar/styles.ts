import theme from 'src/assets/styles'
import styled from 'styled-components'

interface NavProps {
  bottom?: boolean
}

interface ContainerProps {
  isOpen: boolean
}

export const Container = styled.aside<ContainerProps>`
  background-color: ${theme.colors.primary};
  color: ${theme.colors.white};
  grid-area: sidenav;
  height: 90vh;
  overflow-y: auto;
  position: fixed;
  transition: all 0.6s ease-in-out;
  transform: ${props =>
    props.isOpen ? 'translateX(0)' : 'translateX(-350px)'};
  z-index: 2;
  width: 350px;
  margin-top: 100px;
`

export const Logo = styled.div`
  align-items: center;
  justify-content: center;
  background-color: ${theme.colors.primary};
  display: flex;
  min-height: 105px;
`

export const Nav = styled.div<NavProps>`
  > a,
  div {
    display: flex;
    align-items: center;
    color: ${theme.colors.gray[200]};
    padding: 25px 25px 25px 40px;
    text-decoration: none;
    background-color: rgba(255, 255, 255, 0.1);

    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    &.active {
      background-color: ${theme.colors.gray[700]};
      transition: all 0.2s ease-in-out;
    }

    > img {
      height: 30px;
      width: 30px;
    }

    > span {
      font: 500 18px;
      padding-left: 20px;
    }
  }
`
