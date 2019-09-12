import React from 'react';

import { Link } from 'react-router-dom';

import {
  Checkmark,
  Container,
  Header,
  Header2,
  List,
  ListItem,
  Modal,
  P,
  TopImage,
  ListItemMark,
  Note,
  Button,
  ListItemContent
} from './styles'

export const FirstPage = () => <>
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

  <Link to="/second">
    <Button>
      Continue
    </Button>
  </Link>
</>
