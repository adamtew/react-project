import React from 'react';

import {
  Screen,
  Checkmark,
  Header,
  Header2,
  List,
  ListItem,
  P,
  TopImage,
  ListItemMark,
  Note,
  ListItemContent,
  CircleCheck
} from './styles';

import { Button } from '../../components';

export const Welcome = () => <Screen>
  <TopImage />
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
          <CircleCheck />
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

    <Button 
      to="/institution-search"
      primary={false}
    >
      Continue
    </Button>
</Screen>
