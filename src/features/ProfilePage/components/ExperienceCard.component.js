import React from 'react';
import { CardBody } from 'reactstrap';
import Moment from 'react-moment';
import moment from 'moment';
import { isNil } from 'lodash';
import { string } from 'prop-types';

const ExperienceCard = ({ experience }) => {
  const { company, from, to, title, location, description } = experience;
  return (
    <CardBody className="text-md-left">
      <h5>{company}</h5>
      <p>
        <Moment format="YYYY/MM/DD">{moment.utc(from)}</Moment> -{' '}
        {isNil(to) ? (
          'Now'
        ) : (
          <Moment format="YYYY/MM/DD">{moment.utc(to)}</Moment>
        )}
      </p>
      <p>
        <strong>Position: </strong>
        {title}
      </p>
      <p>
        <strong>Location: </strong>
        {location}
      </p>
      <p>
        <strong>Description: </strong>
        {description}
      </p>
    </CardBody>
  );
};

ExperienceCard.propTypes = {
  company: string,
  from: string,
  to: string,
  title: string,
  location: string,
  description: string
};

export default ExperienceCard;
