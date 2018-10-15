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
