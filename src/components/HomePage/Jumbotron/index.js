import React from 'react';
import {
  Grid,
  Image,
} from 'semantic-ui-react'

import jumbotronImage from '../../../media/images/jumbotron.jpg';

const intro = (
  "Add blurb here with intro and purpose"
);

const Jumbotron = () => (
  <Grid stackable>
    <Grid.Row>
     <h1 style={{ fontSize: '4rem' }}>Roze-El's Notes</h1>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column width={5}>
        {intro}
      </Grid.Column>
      <Grid.Column width={11}>
        <Image src={jumbotronImage} />
      </Grid.Column>
    </Grid.Row>
  </Grid>
);

export default Jumbotron;
