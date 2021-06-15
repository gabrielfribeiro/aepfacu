import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  padding: 55px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background: #72c8cd;
  box-shadow: -13px 30px 50px 20px rgba(0, 0, 0, 0.25);
  border-radius: 30px;
`

export const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 30%;
`

export const Title = styled.h2`
  font-size: 2.5rem;
  color: white;

  @media (max-width: 1380px) {
    font-size: 1.7rem;
  }
`

export const SubTitle = styled.p`
  margin-bottom: 17vh;

  color: white;
`

export const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 70%;
  height: 100%;

  background: white;
  border-radius: 0px 29px 29px 0px;
`

export const A = styled.a`
  text-decoration: none;
  color: blue;
  cursor: pointer;
  margin: -20px 0px 20px 0px;
`
