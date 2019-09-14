import styled from 'styled-components'
import { THEME } from '../../lib/theme'

export const Page = styled.div`
  background-color: ${THEME.PRIMARY_1};
  position: absolute;
`

export const Header = styled.h3`
  color: ${THEME.SECONDARY};
	font-size: 20px;
	font-weight: bold;
	line-height: 24px;
`

export const SearchBox = styled.input`
  width: calc(100% - 43px);
  margin: 0 0 20px 0;
  height: 20px;
  padding: 15px 0 15px 43px;
  background-color: #2819AC;
  border-radius: 15px;
  border: none;

  // opacity: 0.5;
  color: rgba(255, 255, 255, 0.5);
  // color: #FFFFFF;
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
  margin: 0 -40px;
  padding: 0 40px 20px 40px;
  border-radius: 15px 15px 0 0;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px 0;
  list-style: none;
`

export const ListItemIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  background: ${THEME.PLACEHOLDER};
  margin: 0 10px 0 0;

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
  background: ${THEME.PRIMARY_1};
  color: ${THEME.SECONDARY};
  display: flex;
  justify-content: center;
  align-items: center;


	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
`
