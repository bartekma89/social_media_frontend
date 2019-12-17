import React from 'react';
import { array } from 'prop-types';
import { Card, CardTitle, Col } from 'reactstrap';
import { isEmpty, orderBy } from 'lodash';

import ExperienceCard from './ExperienceCard.component';

const ProfileExperience = ({ experience }) => {
  const experienceOrderByTo = orderBy(experience, ['to'], ['desc']);
  return (
    <Col xs="12" md="6" lg="6">
      <Card className="my-2 my-md-0 cardbox" body>
        <CardTitle>
          <h3 className="heading">Experience</h3>
        </CardTitle>
        {!isEmpty(experience) ? (
          experienceOrderByTo.map((elem, index) => (
            <div key={elem._id}>
              <hr className="m-0" />
              <ExperienceCard experience={elem} />
            </div>
          ))
        ) : (
          <h5>No experience credentials</h5>
        )}
      </Card>
    </Col>
  );
};

ProfileExperience.propTypes = {
  experience: array
};

export default ProfileExperience;
