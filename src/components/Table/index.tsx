/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

import RCTable from 'rc-table'

import * as S from './styles'

export interface ITableProps<Record = unknown> {
  columns: ITableColumns<Record>[]
  data: Record[]
  key: number
}

interface ITableColumns<Record> {
  title: string
  dataIndex: string
  key: string
  width?: number
  align?: 'left' | 'center' | 'right'
  render?: (value: any, record: Record, index: number) => any
}

export function Table<Record>({
  columns,
  data,
  key,
}: ITableProps<Record>): React.ReactElement<ITableProps<Record>> {
  return (
    <S.Container>
      <RCTable<Record>
        columns={columns}
        data={data}
        emptyText="Nenhum dado encontrado"
        key={key}
      />
    </S.Container>
  )
}
