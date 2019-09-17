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
  ListItemActive,
  ScreenTop
} from './styles';

import { Button } from '../../components';

const data = [
  {text: 'Chase', active: false},
  {text: 'Wells Fargo', active: true},
  {text: 'USAA', active: false},
  {text: 'Bank of America', active: false},
  {text: 'American Express', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'TD Bank', active: false},
  {text: 'US Bank', active: false},
];

const renderListItems = (items) => items.map(({text, active}, index) =>
  <ListItem key={index}>
    <ListItemIcon />
    <ListItemContent>
      {text}
    </ListItemContent>
    {active && <ListItemActive />}
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
