import React from 'react'
import { Link } from 'react-router-dom';

import {
  Header,
  SearchBox,
  List,
  ListItem,
  Button,
  Tray,
  ListItemIcon,
  ListItemContent
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
    <ListItemIcon>
    </ListItemIcon>
    <ListItemContent>
      {item}
    </ListItemContent>
  </ListItem>
)

export const SecondPage = () => <>
  <Header>
    Where is your current balance?
  </Header>

  <SearchBox
    placeholder="Search"
  >
  </SearchBox>

  <Tray>


    <List>
      {renderListItems(data)}
    </List>

    <Link to="/first">
      <Button>
        Next
      </Button>
    </Link>

  </Tray>
</>
