import styled, { keyframes } from 'styled-components'

export const TopImage = styled.div`
  background: gray;
  height: 100px;
  width: 100%;
`

export const Header = styled.h1`
  color: white;
  font-size: 32px;
  font-weight: 600;
`

export const Note = styled.div`
  color: gray;
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
    content: 'test';
    background: orange;
    border-radius: 50%;
  }
`

export const ListItemContent = styled.div`
  display: flex;
  flex-direction: column;
  color: gray;
`

export const Checkmark = styled.div`
`

export const Header2 = styled.h3`
  color: white;
  font-weight: 600;
`

export const P = styled.p`

`

export const Button = styled.div`
  background: white;
  border-radius: 10px;
  color: purple;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
`
