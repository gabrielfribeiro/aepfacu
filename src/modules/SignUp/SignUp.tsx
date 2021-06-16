import React, { useCallback } from 'react'

import Button from 'src/components/UI/Button'
import Input from 'src/components/UI/Input'
import InputMask from 'react-input-mask'
import { Form } from '@unform/web'
import api from 'src/services/api'
import { useHistory } from 'react-router'

import {
  Container,
  Content,
  Left,
  Title,
  SubTitle,
  Right,
  ButtonContainer,
} from './SignUp.style'

interface ISignUpForm {
  cnpj: string
  email: string
  name: string
  password: string
  confirm_password: string
}

const SignUp = () => {
  const history = useHistory()
  const handleSubmit = useCallback(async (formValues: ISignUpForm) => {
    try {
      const payload = {
        cnpj: formValues.cnpj.replace(/\D/g, ''),
        email: formValues.email,
        name: formValues.name,
        password: formValues.password,
        confirm_password: formValues.confirm_password,
      }

      await api.post('/institution', payload)
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
          <Title>Ainda não é cadastrado?</Title>
        </Left>
        <Right>
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
              name="name"
              placeholder="Digite o nome da instituição"
              type="name"
            />
            <Input
              name="email"
              placeholder="Digite um email pra contato"
              type="email"
            />
            <Input
              name="password"
              placeholder="Digite sua senha"
              type="password"
            />
            <Input
              name="confirm_password"
              placeholder="Confirme sua senha"
              type="password"
            />
            <ButtonContainer>
              <Button
                size="default"
                full
                onClick={() => history.push('/login')}
              >
                Cancelar
              </Button>
              <div style={{ width: '20px' }} />
              <Button size="default" type="submit" full>
                Entrar
              </Button>
            </ButtonContainer>
          </Form>
        </Right>
      </Content>
    </Container>
  )
}

export { SignUp }
