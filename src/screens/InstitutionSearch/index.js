import React from 'react'
import {
  Page,
  Header,
  SearchBox,
  List,
  ListItem,
  Tray,
  ListItemIcon,
  ListItemContent
} from './styles';

import { Button } from '../../components';

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

export const InstitutionSearch = () => <Page>
  <Header>
    Where is your current balance?
  </Header>

    <SearchBox placeholder="Search" />

  <Tray>

    <List>
      {renderListItems(data)}
    </List>

      <Button to="/welcome">
        Next
      </Button>

  </Tray>
</Page>
