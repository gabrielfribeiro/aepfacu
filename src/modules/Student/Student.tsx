import React, { useCallback } from 'react'
import Button from 'src/components/UI/Button'
import Input from 'src/components/UI/Input'
import InputMask from 'react-input-mask'
import { Form } from '@unform/web'
import api from 'src/services/api'
import { useHistory } from 'react-router'
import { ICreateStudent } from './Student.interface'
import { Container, InputContainer } from './Student.style'

const Student = () => {
  const history = useHistory()

  const handleSubmit = useCallback(async (formValues: ICreateStudent) => {
    try {
      const payload = {
        course: formValues.course,
        start_course: formValues.start_course,
        end_course: formValues.end_course,
        scholarship: formValues.scholarship,
        student: formValues.student,
        ra: formValues.ra,
      }

      await api.post('/institution/student', payload)
      history.push('/institution')
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          padding: '5vh 17vw',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Input name="student" placeholder="Digite seu nome" />
        <InputContainer>
          <Input name="ra" placeholder="R.A" width="70%" />
          <Input
            name="scholarship"
            placeholder="Porcentagem da bolsa"
            width="28%"
          />
        </InputContainer>
        <InputContainer>
          <InputMask mask="99/99/9999">
            {() => (
              <Input
                name="start_course"
                placeholder="Digite a data de início"
                width="49%"
              />
            )}
          </InputMask>
          <InputMask mask="99/99/9999">
            {() => (
              <Input
                name="end_course"
                placeholder="Digite a data estimada de fim"
                width="49%"
              />
            )}
          </InputMask>
        </InputContainer>
        <Input name="course" placeholder="Digite o curso" />
        <Button size="default" type="submit" full>
          Cadastrar
        </Button>
      </Form>
    </Container>
  )
}

export { Student }
