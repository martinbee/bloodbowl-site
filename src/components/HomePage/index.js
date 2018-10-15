import React from 'react';
import { Container } from 'semantic-ui-react';

import Header from './Header';
import Jumbotron from './Jumbotron';
import Teams from './Teams';

const HomePage = () => (
  <div>
    <Header key="header" />
    <Container>
      <Jumbotron />
      <Teams />
    </Container>
  </div>
);

export default HomePage;
