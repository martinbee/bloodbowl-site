import React from 'react';
import { Dropdown, Menu  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

import { getTeamShorts } from '../../data';

function renderTeamDropdowns(teamInfo) {
  return teamInfo.map(({ teamName, url }) => (
    <Link key={teamName} to={url}>
      <Dropdown.Item>
        {teamName}
      </Dropdown.Item>
    </Link>
  ));
}

function Header() {
  const teamInfo = getTeamShorts().map(({ teamName, url }) => ({ teamName, url }));

  return (
    <Menu fixed>
      <Link to="/">
        <Menu.Item header>
          Roze-El's Notes
        </Menu.Item>
      </Link>
      <Dropdown item text='Teams'>
        <Dropdown.Menu>
          {renderTeamDropdowns(teamInfo)}
        </Dropdown.Menu>
      </Dropdown>
    </Menu>
  );
}

export default Header;
