import styled from 'styled-components'
import { THEME } from './lib/theme'

export const Container = styled.div`
  display: flex;
  background: ${THEME.PRIMARY_1};
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
`

export const Modal = styled.div`
  flex: 0 0 auto;
  margin: auto;
  width: 375px;
  height: 812px;
  position: relative;
  overflow: scroll;
`
