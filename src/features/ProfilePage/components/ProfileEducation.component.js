import React from 'react';
import { array } from 'prop-types';
import { Card, CardTitle, Col } from 'reactstrap';
import { isEmpty, orderBy } from 'lodash';

import EducationCard from './EducationCard.component';

const ProfileEducation = ({ education }) => {
  const educationOrderByTo = orderBy(education, ['to'], ['desc']);
  return (
    <Col xs="12" md="6">
      <Card className="my-2 cardbox">
        <CardTitle>
          <h3 className="heading">Education</h3>
        </CardTitle>
        {!isEmpty(education) ? (
          educationOrderByTo.map((elem, index) => (
            <div key={elem._id}>
              <EducationCard education={elem} />
              {index !== education.length - 1 && <hr className="m-0" />}
            </div>
          ))
        ) : (
          <h4>No education credentials</h4>
        )}
      </Card>
    </Col>
  );
};

ProfileEducation.propTypes = {
  education: array
};

export default ProfileEducation;
