import React from 'react'
import ReactLoading from 'react-loading'
import theme from 'src/assets/styles'

import { Container } from './Loading.style'

type LoadingType =
  | 'blank'
  | 'balls'
  | 'bars'
  | 'bubbles'
  | 'cubes'
  | 'cylon'
  | 'spin'
  | 'spinningBubbles'
  | 'spokes'

interface IFullScreenLoaderProps {
  type?: LoadingType
}

const Loading = ({ type = 'spin' }: IFullScreenLoaderProps) => (
  <Container>
    <ReactLoading
      type={type}
      width="100px"
      height="100px"
      color={theme.colors.primary}
    />
  </Container>
)

export { Loading }
