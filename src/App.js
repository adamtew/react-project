import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import styles from './App.css'

import {
  Container,
  Modal,
} from './styles'

import { FirstPage, SecondPage } from './components';


function App() {
  return (
    <Router>
      <Route render={ ({ location }) => (
      <Container>
        <Modal>
          <TransitionGroup>
            <CSSTransition
              key={location.key}
              timeout={300}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/first" component={FirstPage} />
                <Route exact path="/second" component={SecondPage} />
                <Route render={() => <div>Not Found</div>} />

              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </Modal>
      </Container>
  )}/>
    </Router>
  );
}

export default App;
