import React, { useCallback } from 'react'

import Button from 'src/components/UI/Button'
import Input from 'src/components/UI/Input'
import InputMask from 'react-input-mask'
import { Form } from '@unform/web'
import api from 'src/services/api'
import { useHistory } from 'react-router'
import { FaUserGraduate } from 'react-icons/fa'

import {
  Container,
  Content,
  Left,
  Title,
  SubTitle,
  Right,
  A,
} from './Login.style'

interface ILoginForm {
  cnpj: string
  password: string
}

const Login = () => {
  const history = useHistory()
  const handleSubmit = useCallback(async (formValues: ILoginForm) => {
    try {
      const payload = {
        cnpj: formValues.cnpj.replace(/\D/g, ''),
        password: formValues.password,
      }

      await api.post('/login', payload)
      history.push('/institution')
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Content>
        <Left>
          <Title>Bem Vindo ao Mantoras</Title>
          <SubTitle>Controle de Cadastros</SubTitle>
          <Button size="default" color="cancel">
            Cadastrar-se
          </Button>
        </Left>
        <Right>
          <FaUserGraduate
            color="#72c8cd"
            size={80}
            style={{ marginBottom: '20px' }}
          />
          <Form
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              padding: '5vh 17vw',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <InputMask mask="99.999.999/9999-99">
              {() => <Input name="cnpj" placeholder="Digite seu CNPJ" />}
            </InputMask>
            <Input
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <A>Esqueci minha senha!</A>
            <Button size="default" type="submit" full>
              Entrar
            </Button>
          </Form>
        </Right>
      </Content>
    </Container>
  )
}

export { Login }
