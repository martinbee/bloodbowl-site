import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

import HomePage from './components/HomePage';
import TeamPage from './components/TeamPage';
import Disclaimer from './components/Disclaimer';

const App = () => (
  <div>
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
    <Disclaimer />
  </div>
);

export default App;
