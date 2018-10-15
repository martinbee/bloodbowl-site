import React from 'react';
import { shape, string } from 'prop-types';

function TeamPage({ match }) {
  const { teamName } = match.params;
  // grab team data on mount using teamName

  return (
    <div>{teamName}</div>
  );
}

TeamPage.propTypes = {
  match: shape({
    params: shape({
      teamName: string,
    })
  }),
};

export default TeamPage;
