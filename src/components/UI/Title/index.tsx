import React from 'react'
import { ContainerTitle, Text } from './styles'

interface ITitleProps {
  text: string
}

const Title = ({ text }: ITitleProps) => {
  return (
    <ContainerTitle>
      <Text>{text}</Text>
    </ContainerTitle>
  )
}

export { Title }
