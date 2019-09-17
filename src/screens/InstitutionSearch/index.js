import React, { useState } from 'react'
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

export const InstitutionSearch = () => {
  const [filteredData, setData] = useState(data);
  return <Screen>
    <ScreenTop>
      <Header>
        Where is your current balance?
      </Header>
        <SearchBox
          placeholder="Company name"
          onChange={(event) => {
            console.log('event', event.target.value)
            return setData(filteredData.filter(item => item.text.toLowerCase() === event.target.value))
          }}
        />
    </ScreenTop>

    <Tray>

      <List>
        {renderListItems(filteredData)}
      </List>

      <Action>
        <Button to="/welcome">
          Next
        </Button>
      </Action>

    </Tray>
  </Screen>
}
