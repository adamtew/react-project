import styled from 'styled-components'
import { THEME, LAYOUT } from './lib/theme'

export const Container = styled.div`
  display: flex;
  background: ${THEME.PRIMARY};
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100vh;
`

export const Modal = styled.div`
  flex: 0 0 auto;
  height: 812px;
  margin: auto;
  overflow-y: scroll;
  position: relative;
  width: 375px;
  transition: width .3s ease;

  @media (max-width: ${LAYOUT.PHONE}) {
    width: 100%;
    height: 100%;
  }
`
