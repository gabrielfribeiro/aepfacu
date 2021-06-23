/* eslint-disable react/display-name */
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Panel } from 'rc-collapse'
import { ITableProps, Table } from 'src/components/Table'
import api from 'src/services/api'
import { IColumn, IInstitutionList, IStudent } from './Institution.interface'
import {
  Container,
  CourseName,
  PanelContainer,
  StyledCollapse,
  EmptyData,
} from './Institution.style'
import { BsTrash } from 'react-icons/bs'
import { Loading } from 'src/components/Loading'
import { FaPlus } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'

const Institution = () => {
  const [institutions, setInstitutions] = useState<IInstitutionList[]>([])
  const [isLoading, setIsloading] = useState(false)
  const history = useHistory()

  useEffect(() => {
    findInstitutions()
  }, [])

  const handleTableData = (student: IStudent[]): IColumn[] => {
    return student.map(item => ({
      ra: item.ra,
      name: item.student,
      scholarship: item.scholarship,
      start_course: item.start_course,
      end_course: item.end_course,
      options: '',
    }))
  }

  const findInstitutions = async () => {
    try {
      setIsloading(true)
      const { data } = await api.get<IInstitutionList[]>('/institution')
      setInstitutions(data)
    } catch (error) {
      console.log(error)
    } finally {
      setIsloading(false)
    }
  }

  const onClickTrash = async (item: IColumn) => {
    try {
      setIsloading(true)
      await api.delete(`/institution/student?ra=${item.ra}`)
      toast.success('Aluno deletado com sucesso')
      findInstitutions()
    } catch (error) {
      console.log(error)
    } finally {
      setIsloading(false)
    }
  }

  const columns: ITableProps<IColumn>['columns'] = [
    {
      title: 'R.A',
      dataIndex: 'ra',
      key: 'ra',
    },
    {
      title: 'Nome',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: '% Bolsa',
      dataIndex: 'scholarship',
      key: 'scholarship',
    },
    {
      title: 'Data Início',
      dataIndex: 'start_course',
      key: 'start_course',
    },
    {
      title: 'Data Fim',
      dataIndex: 'end_course',
      key: 'end_course',
    },
    {
      title: 'Opções',
      dataIndex: 'options',
      key: 'options',
      width: 60,
      render: (...args) => {
        const state = args[1]
        return (
          <div>
            <BsTrash
              style={{ cursor: 'pointer' }}
              onClick={() => onClickTrash(state)}
            />
          </div>
        )
      },
    },
  ]

  const handleData = (index: number) => {
    return handleTableData(institutions[index].student_list)
  }

  return (
    <>
      {isLoading && <Loading />}
      <Container>
        {institutions.length ? (
          institutions.map((item, index) => {
            return (
              <StyledCollapse key={index}>
                <Panel
                  header={
                    <PanelContainer>
                      <CourseName>{item.course_name}</CourseName>
                      <FaPlus onClick={() => history.push('/student')} />
                    </PanelContainer>
                  }
                >
                  <Table
                    key={index}
                    columns={columns}
                    data={handleData(index)}
                  />
                </Panel>
              </StyledCollapse>
            )
          })
        ) : (
          <EmptyData>Você não possui nenhum dado cadastrado!</EmptyData>
        )}
      </Container>
    </>
  )
}

export { Institution }
