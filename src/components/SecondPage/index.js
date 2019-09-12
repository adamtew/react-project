import React from 'react'

import {
  Header,
  SearchBox,
  List,
  ListItem,
  Button
} from './styles';

const data = [
  'Chase',
  'Wells Fargo',
  'USAA',
  'Bank of America',
  'American Express',
  'TD Bank',
  'US Bank'
];

const renderListItems = (items) => items.map(item =>
  <ListItem>
    {item}
  </ListItem>
)

export const SecondPage = () => <>
  <Header>
    Where is your current balance?
  </Header>

  <SearchBox>
    Search
  </SearchBox>

  <List>
    {renderListItems(data)}
  </List>

  <Button>
    Next
  </Button>
</>
