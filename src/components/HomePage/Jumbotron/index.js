import React from 'react';
import { Grid, Image  } from 'semantic-ui-react'

import jumbotronImage from '../../../media/images/jumbotron.jpg';

const intro = (
  "Blood Bowl is copyright Games Workshop"
);

const Jumbotron = () => (
  <Grid stackable>
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
