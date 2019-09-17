import styled from 'styled-components'
import { THEME, LAYOUT } from '../../lib/theme'

export const Screen = styled.div`
  background-color: ${THEME.PRIMARY};
`

export const ScreenTop = styled.div`
  padding: 0 25px;
`

export const Header = styled.h3`
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
  color: ${THEME.SECONDARY};
   margin: 69px 0 20px 0;

  @media (max-width: ${LAYOUT.PHONE}) {
   margin: 10px 0;
  }
`

export const SearchBox = styled.input`
	font-size: 16px;
	line-height: 19px;
  background-color: #2819AC;
  border-radius: 15px;
  border: none;
  color: rgba(255, 255, 255, 0.5);
  height: 20px;
  margin: 0 0 30px 0;
  padding: 15px 0 15px 43px;
  width: calc(100% - 43px);

  @media (max-width: ${LAYOUT.PHONE}) {
  margin: 0 0 10px 0;
  }
`

export const Tray = styled.div`
  background: white;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  padding: 22px 25px 20px 25px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 12px 0;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  list-style: none;
  padding: 12px 0;
`

export const ListItemIcon = styled.div`
  background: ${THEME.PLACEHOLDER};
  border-radius: 50%;
  height: 48px;
  margin: 0 15px 0 0;
  width: 48px;
`

export const ListItemContent = styled.div`
	color: #002251;
	font-size: 16px;
	line-height: 19px;
  align-items: center;
  display: flex;
`

export const Button = styled.div`
	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
  align-items: center;
  background: ${THEME.PRIMARY};
  border-radius: 15px;
  color: ${THEME.SECONDARY};
  display: flex;
  justify-content: center;
  padding: 10px;
  width: 100%;
`
