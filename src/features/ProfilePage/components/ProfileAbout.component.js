import React from 'react';
import { object } from 'prop-types';
import { Card, CardTitle, CardText, Badge } from 'reactstrap';
import { isEmpty } from 'lodash';

const ProfileAbout = ({ profile }) => {
  const { bio, skills } = profile || {};

  return (
    <>
      {!isEmpty(bio) && (
        <Card className="my-2 cardbox" body>
          <CardTitle>
            <h3>Bio</h3>
          </CardTitle>
          <CardText>{bio}</CardText>
        </Card>
      )}
      {!isEmpty(skills) && (
        <Card className="my-2 text-center cardbox" body>
          <CardTitle>
            <h3>Skills</h3>
          </CardTitle>
          <CardText>
            {skills.map((skill) => (
              <Badge
                key={`${skill.length.toString()}_${skill}`}
                className="m-1"
                style={{
                  fontSize: '1.1rem'
                }}
                color="primary"
                pill
              >
                {skill}
              </Badge>
            ))}
          </CardText>
        </Card>
      )}
    </>
  );
};

ProfileAbout.propTypes = {
  profile: object
};

export default ProfileAbout;
