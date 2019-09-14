import React from 'react'
import {
  Screen,
  Header,
  SearchBox,
  List,
  ListItem,
  Tray,
  ListItemIcon,
  ListItemContent,
  ScreenTop
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

const renderListItems = (items) => items.map((item, index) =>
  <ListItem key={index}>
    <ListItemIcon>
    </ListItemIcon>
    <ListItemContent>
      {item}
    </ListItemContent>
  </ListItem>
)

export const InstitutionSearch = () => <Screen>
  <ScreenTop>
    <Header>
      Where is your current balance?
    </Header>
    <SearchBox placeholder="Company name" />
  </ScreenTop>

  <Tray>

    <List>
      {renderListItems(data)}
    </List>

      <Button to="/welcome">
        Next
      </Button>

  </Tray>
</Screen>
