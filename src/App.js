import React from 'react';
import { Route, HashRouter as Router, Switch } from 'react-router-dom';
import { Container, Modal } from './styles'
import { Welcome, InstitutionSearch } from './screens';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/iframe" render={() => <div style={{height: '100vh'}}>
          <iframe
            title="myframe"
            src={`${process.env.REACT_APP_BASE_URL}#/`}
            height="100%"
            width="100%"
          />
        </div>} />

        <Route path="/" render={({match}) =>
          <Container>
            <Modal>
              <Switch>
                <Route
                  path={`${match.url}institution-search`}
                  component={InstitutionSearch}
                />
                <Route
                  exact
                  path={`${match.url}/`|`${match.url}/welcome`}
                  component={Welcome}
                />
              </Switch>
            </Modal>
          </Container>}>
        </Route>
      </Switch>
    </Router>
  )
}

export default Routes;
