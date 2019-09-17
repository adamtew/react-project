import styled from 'styled-components';
import { THEME, LAYOUT } from '../../lib/theme';

export const Screen = styled.div`
  background-color: ${THEME.PRIMARY};
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 10px 35px;
  height: calc(100% - 20px);
  
  @media (max-width: ${LAYOUT.PHONE}) {
    padding: 10px;
  }
`

export const TopImage = styled.div`
  background: ${THEME.PLACEHOLDER};
  height: 100px;
  width: 100%;
`

export const Header = styled.h1`
  color: ${THEME.TEXT_PRIMARY};
  margin: 57px 0 0 0;
  font-size: 32px;
  font-weight: bold;
  line-height: 38px;

  @media (max-width: ${LAYOUT.PHONE}) {
    margin: 0;
  }
`

export const Note = styled.div`
  margin: 30px 0 0 0;
	font-size: 18px;
	line-height: 22px;
  color: ${THEME.TEXT_PRIMARY};
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 6px;
`

export const ListItem = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 35px;
`

export const ListItemMark = styled.div`
  display: flex;
`

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${THEME.TEXT_PRIMARY};
  margin: 0 0 0 12px;
`

export const Header2 = styled.h3`
  margin: 0 0 0 0;
	font-size: 16px;
	font-weight: bold;
	line-height: 19px;
  color: ${THEME.TEXT_PRIMARY};
`

export const P = styled.p`
  margin: 4px 0 0 0;
	opacity: 0.8;
	font-size: 16px;
	font-weight: 500;
	line-height: 19px;
`

export const Action = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: flex-end;
  margin: 10px 0 0 0;
  padding: 0 0 60px 0;

  @media (max-width: ${LAYOUT.PHONE}) {
    padding: 0;
  }
`
