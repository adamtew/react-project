import React from 'react';

import {
  Container,
  Modal,
} from './styles'

import { FirstPage, SecondPage } from './components';

function App() {
  return (
    <Container>
      <Modal>
        <SecondPage />
      </Modal>
    </Container>
  );
}

export default App;
