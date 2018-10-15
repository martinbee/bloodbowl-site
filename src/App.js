import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './HomePage';
import TeamPage from './TeamPage';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/teams/:teamName"
        component={TeamPage}
      />
      <Route
        path="/"
        component={HomePage}
      />
    </Switch>
  </Router>
);

export default App;
