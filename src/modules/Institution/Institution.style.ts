import styled from 'styled-components'
import Collapse from 'rc-collapse'
import 'rc-collapse/assets/index.css'
import theme from 'src/assets/styles'

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`

export const StyledCollapse = styled(Collapse)`
  &.rc-collapse {
    width: 100%;
    border-radius: 0px;
    border-color: transparent;
    background-color: ${theme.colors.gray[300]};
    border: 0px;
    margin-bottom: 10px;
    > .rc-collapse-item {
      border: 0px;
      > .rc-collapse-header {
        flex-direction: row-reverse;
        height: auto;
        line-height: normal;
        text-indent: 0px;
        text-transform: none;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
    }
    .rc-collapse-content {
      border-bottom-width: 0px;
      border-color: ${theme.colors.white};
      border-left-width: 3px;
      border-right-width: 0px;
      border-style: solid;
      border-top-width: 0px;
    }
    .rc-collapse-content-box {
      margin-top: 0px;
      margin-bottom: 12px;
    }
  }
`

export const PanelContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-right: 20px;
`

export const CourseName = styled.p`
  font-size: 1rem;
`

export const EmptyData = styled.div`
  width: 100%;
  height: 150px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.5rem;
`
