import React from 'react';
import { Table, Button } from 'reactstrap';
import { array, func } from 'prop-types';
import { map, isNil } from 'lodash';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { deleteExperience } from '../../../actions/profile';

const Experience = ({ experience, deleteExperience }) => {
  return (
    <>
      <h2 className="my-3">Experience Credentials</h2>
      <Table responsive hover>
        <thead>
          <tr>
            <th>Company</th>
            <th>Title</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {map(experience, (exp) => (
            <tr key={exp._id}>
              <td>{exp.company}</td>
              <td>{exp.title}</td>
              <td>
                <Moment format="YYYY/MM/DD">{exp.from}</Moment>
                {' - '}
                {isNil(exp.to) ? (
                  'Now'
                ) : (
                  <Moment format="YYYY/MM/DD">{exp.to}</Moment>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  className="m-0"
                  color="danger"
                  onClick={() => deleteExperience(exp._id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

Experience.propTypes = {
  experience: array.isRequired,
  deleteExperience: func
};

const mapDispatchToProps = {
  deleteExperience
};

export default connect(
  null,
  mapDispatchToProps
)(Experience);
