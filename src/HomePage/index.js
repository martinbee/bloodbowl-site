import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Races from './Races';

const HomePage = () => ([
  <Header key="header" />,
  <Jumbotron key="jumbotron" />,
  <Races key="races" />,
]);

export default HomePage;
