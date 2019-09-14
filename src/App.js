import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group';
import './App.css'

import {
  Container,
  Modal,
} from './styles'

import { Welcome, InstitutionSearch } from './screens';


function App() {
  return (
    <Router>
      <Route render={ ({ location }) => (
        <Container>
          <Modal>
          <SwitchTransition mode="in-out">
            <CSSTransition
              key={location.key}
              timeout={200}
              classNames="fade"
            >
              <Switch location={location}>
                <Route exact path="/welcome" component={Welcome} />
                <Route exact path="/institution-search" component={InstitutionSearch} />
                <Route render={() => <div>Not Found</div>} />

              </Switch>
            </CSSTransition>
          </SwitchTransition>
        </Modal>
      </Container>
  )}/>
    </Router>
  );
}

export default App;
