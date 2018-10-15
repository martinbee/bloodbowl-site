import React from 'react';
import { Container } from 'semantic-ui-react';

function Disclaimer() {
  return (
    <Container text textAlign="center">
      <small>
        <p>
          This web site is completely unofficial and in no way endorsed by Games Workshop
          Limited. This site is also not endorsed by the NAF the World Headquarters of
          the blood Bowl community (not officially endorsed by Games Workshop)
        </p>
        <p>
          Blood Bowl, the Blood Bowl logo, the Blood Bowl Spike device and all associated
          marks, names, races, race insignia, characters, vehicles, locations, units,
          illustrations and images from the Blood Bowl game are either ®, TM and/or
          Copyright Games Workshop Ltd 2000-2018, variably registered in the UK and
          other countries around the world. Used without permission. No challenge to
          their status intended. All Rights Reserved to their respective owners.
        </p>
      </small>
    </Container>
  );
}

export default Disclaimer;

