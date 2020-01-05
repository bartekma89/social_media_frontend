import React from 'react';
import { array } from 'prop-types';
import { Card, CardTitle, Col } from 'reactstrap';
import { isEmpty, orderBy } from 'lodash';

import EducationCard from './EducationCard.component';

const ProfileEducation = ({ education }) => {
  const educationOrderByTo = orderBy(education, ['to'], ['desc']);
  return (
    <Col xs="12" md="6">
      <Card className="my-2 my-md-0 cardbox" body>
        <CardTitle>
          <h3 className="heading">Education</h3>
        </CardTitle>
        {!isEmpty(education) ? (
          educationOrderByTo.map((elem) => (
            <div key={elem._id}>
              <hr className="m-0" />
              <EducationCard education={elem} />
            </div>
          ))
        ) : (
          <h5>No education credentials</h5>
        )}
      </Card>
    </Col>
  );
};

ProfileEducation.propTypes = {
  education: array
};

export default ProfileEducation;
