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
  ListItemActive,
  ScreenTop
} from './styles';

import { Button } from '../../components';

let data = [
  {text: 'Chase', active: false},
  {text: 'Wells Fargo', active: true},
  {text: 'USAA', active: false},
  {text: 'Bank of America', active: false},
  {text: 'American Express', active: false},
  {text: 'TD Bank', active: false},
  {text: 'Other Bank', active: false},
  {text: 'New Bank', active: false},
  {text: 'Bank of New Zealand', active: false},
  {text: 'Bank with a long Name', active: false},
  {text: 'New Credit Union', active: false},
  {text: 'Principal Bank', active: false},
  {text: 'Cafateria Credit', active: false},
  {text: 'Sub-par Bank', active: false},
];

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
            const filterCheck = data.filter(item => item.text.toLowerCase().includes(event.target.value))
            return filterCheck.length ? setData(filterCheck) : setData(data)
          }}
        />
    </ScreenTop>

    <Tray>
      <List>
        {filteredData.map(({text, active}, index) =>
          <ListItem key={index}
              onClick={(x) => {
                data = data.map(item => ({ ...item, active: item.text === text ? !item.active : item.active}))
                setData(filteredData.map(item => ({ ...item, active: item.text === text ? !item.active : item.active})))
              }}>
            <ListItemIcon />
              <ListItemContent>
              {text}
            </ListItemContent>
            {active && <ListItemActive />}
          </ListItem>
        )}
      </List>

      <Action>
        <Button to="/welcome">
          Next
        </Button>
      </Action>
    </Tray>
  </Screen>
}
