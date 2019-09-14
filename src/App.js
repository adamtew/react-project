import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import './App.css';

import {
  Container,
  Modal,
} from './styles'

import { Welcome, InstitutionSearch } from './screens';

const MyFrame = () => <div style={{height: '100vh'}}>
  <iframe
    title="myframe"
    src={`${process.env.BASE_URL}/#/app/welcome`}
    height="100%"
    width="100%"
    sandbox
  />
</div>

const App = ({match}) => <Container>
  <Modal>
    <Switch>
      <Route
        exact
        path={`${match.url}/`}
        component={Welcome}
      />
      <Route
        path={`${match.url}/welcome`}
        component={Welcome}
      />
      <Route
        path={`${match.url}/institution-search`}
        component={InstitutionSearch}
      />
    </Switch>
  </Modal>
</Container>

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/iframe" component={MyFrame} />
        <Route path="/app" component={App} />
      </Switch>
    </Router>
  )
}

export default Routes;
