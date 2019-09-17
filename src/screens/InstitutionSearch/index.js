import React from 'react'
import {
  Action,
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
  'TD Bank',
  'TD Bank',
  'TD Bank',
  'TD Bank',
  'TD Bank',
  'TD Bank',
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

    <Action>
      <Button to="/welcome">
        Next
      </Button>
    </Action>

  </Tray>
</Screen>
