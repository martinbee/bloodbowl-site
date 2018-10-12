import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './HomePage';
import RacePage from './RacePage';

const App = () => (
  <Router>
    <Switch>
      <Route
        path="/races"
        component={RacePage}
      />
      <Route
        path="/"
        component={HomePage}
      />
    </Switch>
  </Router>
);

export default App;
