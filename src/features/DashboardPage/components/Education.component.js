import React from 'react';
import { Table, Button } from 'reactstrap';
import { array, func } from 'prop-types';
import { map, isNil } from 'lodash';
import Moment from 'react-moment';
import { connect } from 'react-redux';

import { deleteEducation } from '../../../actions/profile';

const Education = ({ education, deleteEducation }) => {
  return (
    <>
      <h2 className="my-3">Education Credentials</h2>
      <Table responsive hover>
        <thead>
          <tr>
            <th>School</th>
            <th>Field of Study</th>
            <th>Degree</th>
            <th>Years</th>
            <th />
          </tr>
        </thead>
        <tbody>
          {map(education, (edu) => (
            <tr key={edu._id}>
              <td>{edu.school}</td>
              <td>{edu.fieldofstudy}</td>
              <td>{edu.degree}</td>
              <td>
                <Moment format="YYYY/MM/DD">{edu.from}</Moment>
                {' - '}
                {isNil(edu.to) ? (
                  'Now'
                ) : (
                  <Moment format="YYYY/MM/DD">{edu.to}</Moment>
                )}
              </td>
              <td>
                <Button
                  size="sm"
                  className="m-0"
                  color="danger"
                  onClick={() => deleteEducation(edu._id)}
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

Education.propTypes = {
  education: array.isRequired,
  deleteEducation: func
};

const mapDispatchToProps = {
  deleteEducation
};

export default connect(
  null,
  mapDispatchToProps
)(Education);
