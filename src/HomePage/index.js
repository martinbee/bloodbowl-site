import React from 'react';
import Header from './Header';
import Jumbotron from './Jumbotron';
import Teams from './Teams';

const HomePage = () => ([
  <Header key="header" />,
  <Jumbotron key="jumbotron" />,
  <Teams key="teams" />,
]);

export default HomePage;
