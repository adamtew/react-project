import React from 'react';

import {
  Action,
  Header,
  Header2,
  List,
  ListItem,
  ListItemContent,
  ListItemMark,
  Note,
  P,
  Screen,
} from './styles';

import { Button, Checkmark } from '../../components';

import HeaderImage from './header.png';

export const Welcome = (props) => <Screen>
  <div>
    <img
      width="100%"
      height="120px"
      src={HeaderImage}
      alt="Shield and credit cards"
      style={{objectFit: "contain"}}
    />
  </div>
  <Header>
    Hi, Jane!
  </Header>

  <Note>
    Canopy CU uses Atomic to transfer your card balance over.
  </Note>

  <List>
    <ListItem>
      <ListItemMark>
        <Checkmark />
      </ListItemMark>
      <ListItemContent>
        <Header2>
          Secure
        </Header2>
        <P>
          Your data is always encrypted, end to end.
        </P>
      </ListItemContent>
    </ListItem>

    <ListItem>
      <ListItemMark>
        <Checkmark />
      </ListItemMark>
      <ListItemContent>
        <Header2>
          Quick
        </Header2>
        <P>
          Atomic will find the fastest way to make your transfer.
        </P>
      </ListItemContent>
    </ListItem>
  </List>
  <Action>
    <Button 
      to="/institution-search"
      primary={false}
    >
      Continue
    </Button>
  </Action>
</Screen>
