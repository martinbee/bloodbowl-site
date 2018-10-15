import React from 'react';

import { getTeamShorts } from '../data';

function renderTeamShorts(teamShorts) {
  return teamShorts.map(({ title, url }) => (
    <li key={title}>
      <a href={url}>{title}</a>
    </li>
  ));
}

function Teams() {
  const teamShorts = getTeamShorts();

  return <ul>{renderTeamShorts(teamShorts)}</ul>;
}
export default Teams;
//import { Grid, Image  } from 'semantic-ui-react'

//const GridExampleCelled = () => (
    //<Grid celled>
      //<Grid.Row>
        //<Grid.Column width={3}>
          //<Image src='/images/wireframe/image.png' />
        //</Grid.Column>
        //<Grid.Column width={13}>
          //<Image src='/images/wireframe/centered-paragraph.png' />
        //</Grid.Column>
      //</Grid.Row>

//)
