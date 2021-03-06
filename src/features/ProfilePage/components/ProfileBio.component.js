import React from 'react';
import { string } from 'prop-types';
import { isEmpty } from 'lodash';
import { Card, CardTitle, CardText } from 'reactstrap';

const ProfileBio = ({ bio }) => (
  <>
    {!isEmpty(bio) ? (
      <Card className="my-2 cardbox" body>
        <CardTitle>
          <h3 className="heading">Bio</h3>
        </CardTitle>
        <CardText>{bio}</CardText>
      </Card>
    ) : null}
  </>
);

ProfileBio.propTypes = {
  bio: string
};

export default ProfileBio;
