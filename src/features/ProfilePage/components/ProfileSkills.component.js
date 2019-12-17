import React from 'react';
import { array } from 'prop-types';
import { isEmpty } from 'lodash';
import { Card, CardTitle, CardText, Badge } from 'reactstrap';

const ProfileSkills = ({ skills }) => {
  return (
    <>
      {!isEmpty(skills) ? (
        <Card className="my-2 cardbox" body>
          <CardTitle>
            <h3 className="heading">Skills</h3>
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
      ) : null}
    </>
  );
};

ProfileSkills.propTypes = {
  skills: array
};

export default ProfileSkills;
