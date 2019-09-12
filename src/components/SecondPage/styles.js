import styled, { keyframes } from 'styled-components'

export const Header = styled.h3`
  color: white;
  font-size: 20px;
`

export const SearchBox = styled.input`
  width: calc(100% - 43px);
  margin: 0 0 20px 0;
  height: 20px;
  padding: 15px 0 15px 43px;
  background: rgba(0,0,0,.2);
  border-radius: 10px;
  border: none;
  font-size: 18px;

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
  background: orange;
  margin: 0 10px 0 0;
`

export const ListItemContent = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
`

export const Button = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 10px;
  background: #4742e6;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  bottom: 0;
`
