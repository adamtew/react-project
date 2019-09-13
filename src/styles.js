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
  height: 50%;
  width: 50%;
  border-radius: 25px;
  border: 1px solid gray;
  padding: 20px 40px;
  position: absolute;
  overflow: scroll;
`
