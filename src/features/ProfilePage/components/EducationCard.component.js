import React from 'react';
import { CardBody } from 'reactstrap';
import Moment from 'react-moment';
import moment from 'moment';
import { isNil } from 'lodash';
import { string } from 'prop-types';

const EducationCard = ({ education }) => {
  const { school, degree, fieldofstudy, to, from, description } = education;
  return (
    <CardBody className="text-md-left">
      <h5>{school}</h5>
      <p>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
        {isNil(to) ? (
          'Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>
        )}
      </p>
      <p>
        <strong>Degree: </strong>
        {degree}
      </p>
      <p>
        <strong>Field Of Study: </strong>
        {fieldofstudy}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </CardBody>
  );
};

EducationCard.propTypes = {
  company: string,
  from: string,
  to: string,
  title: string,
  location: string,
  description: string
};

export default EducationCard;
