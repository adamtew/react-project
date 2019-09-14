import styled from 'styled-components'
import { THEME } from '../../lib/theme'

export const Screen = styled.div`
  background-color: ${THEME.PRIMARY};
`

export const ScreenTop = styled.div`
  padding: 0 25px;
`

export const Header = styled.h3`
  margin: 69px 0 20px 0;
  color: ${THEME.SECONDARY};
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
`

export const SearchBox = styled.input`
  width: calc(100% - 43px);
  margin: 0 0 30px 0;
  height: 20px;
  padding: 15px 0 15px 43px;
  background-color: #2819AC;
  border-radius: 15px;
  border: none;

  color: rgba(255, 255, 255, 0.5);
	font-size: 16px;
	line-height: 19px;

  &:after {
    content: 'asldkfj';
  }
`

export const Tray = styled.div`
  display: flex;
  flex-direction: column;
  background: white;
  padding: 22px 25px 20px 25px;
  border-radius: 15px 15px 0 0;
`

export const List = styled.div`
  margin: 0 0 12px 0;
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 12px 0;
  list-style: none;
`

export const ListItemIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: ${THEME.PLACEHOLDER};
  margin: 0 15px 0 0;

`

export const ListItemContent = styled.div`
  display: flex;
  align-items: center;

	color: #002251;
	font-size: 16px;
	line-height: 19px;
`

export const Button = styled.div`
  width: 100%;
  border-radius: 15px;
  padding: 10px;
  background: ${THEME.PRIMARY};
  color: ${THEME.SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;


	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
`
