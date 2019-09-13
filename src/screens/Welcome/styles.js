import styled from 'styled-components';
import { THEME } from '../../lib/theme';

export const Screen = styled.div`
  background-color: ${THEME.PRIMARY_1};
  position: absolute;
`

export const TopImage = styled.div`
  background: ${THEME.PLACEHOLDER};
  height: 100px;
  width: 100%;
`

export const Header = styled.h1`
  color: ${THEME.TEXT_PRIMARY};
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;
`

export const Note = styled.div`
	font-size: 18px;
	line-height: 22px;
  color: ${THEME.TEXT_PRIMARY};
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
`

export const ListItemMark = styled.div`
  display: flex;
  &:after {
    // content: 'test';
    background: orange;
    border-radius: 50%;
  }
`

export const ListItemContent = styled.div`

  display: flex;
  flex-direction: column;
  color: ${THEME.TEXT_PRIMARY};
`

export const Checkmark = styled.div`
	box-sizing: border-box;
	height: 22px;
	width: 22px;
	border: 2px solid #FFFFFF;
`

export const CircleCheck = styled.div`
	box-sizing: border-box;
	height: 12.01px;
	width: 15px;
	border: 2px solid #FFFFFF;
`

export const Header2 = styled.h3`
	font-size: 16px;
	font-weight: bold;
	line-height: 19px;
  color: ${THEME.TEXT_PRIMARY};
`

export const P = styled.p`
	opacity: 0.8;
	font-size: 16px;
	font-weight: 500;
	line-height: 19px;

`

