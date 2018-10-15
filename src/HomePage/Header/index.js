import React from 'react';
import { Dropdown, Menu  } from 'semantic-ui-react'
import { Link } from 'react-router-dom';

const Header = () => (
  <Menu fixed>
    <Menu.Item header>Blood Bowl</Menu.Item>
    <Dropdown item text='Races'>
      <Dropdown.Menu>
        <Link to="/races">
          <Dropdown.Item>All</Dropdown.Item>
        </Link>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
);

export default Header;
