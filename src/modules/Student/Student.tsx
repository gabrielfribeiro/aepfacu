import React, { useCallback } from 'react'
import * as Yup from 'yup'
import Button from 'src/components/UI/Button'
import Input from 'src/components/UI/Input'
import InputMask from 'react-input-mask'
import { Form } from '@unform/web'
import api from 'src/services/api'
import { useHistory } from 'react-router'
import { ICreateStudent } from './Student.interface'

import { toast } from 'react-toastify'

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

      const studentSchema = Yup.object().shape({
        course: Yup.string().required('Nome do curso é obrigatório'),
        start_course: Yup.string().required('Data início é obrigatório'),
        end_course: Yup.string().required('Data fim é obrigatório'),
        scholarship: Yup.string().required('% bolsa é obrigatório'),
        student: Yup.string().required('Nome do aluno é obrigatório'),
        ra: Yup.string().required('RA é obrigatório'),
      })

      await studentSchema.validate(payload, { abortEarly: false })

      await api.post('/institution/student', payload)
      history.push('/institution')
    } catch (error) {
      error.errors.forEach((error: import('react-toastify').ToastContent) =>
        toast.error(error),
      )
    }
  }, [])

  return (
    <Container>
      <h1 style={{ fontWeight: 'bold' }}>Cadastro de Aluno</h1>
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
          <Input name="ra" placeholder="R.A" width="68%" />
          <Input name="scholarship" placeholder="% da bolsa" width="30%" />
        </InputContainer>
        <InputContainer>
          <InputMask mask="99/99/9999">
            {() => (
              <Input
                name="start_course"
                placeholder="Data início"
                width="49%"
              />
            )}
          </InputMask>
          <InputMask mask="99/99/9999">
            {() => (
              <Input name="end_course" placeholder="Data fim" width="49%" />
            )}
          </InputMask>
        </InputContainer>
        <Input name="course" placeholder="Digite o curso" />
        <Button size="default" type="submit" full>
          Salvar
        </Button>
      </Form>
    </Container>
  )
}

export { Student }
