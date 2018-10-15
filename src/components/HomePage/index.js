import React from 'react';
import { Container } from 'semantic-ui-react';

import Jumbotron from './Jumbotron';
import Teams from './Teams';

const HomePage = () => (
  <Container>
    <Jumbotron />
    <Teams />
  </Container>
);

export default HomePage;
