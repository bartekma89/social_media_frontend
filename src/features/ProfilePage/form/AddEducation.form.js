import React from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import {
  Button,
  NavLink,
  Input,
  FormGroup,
  FormFeedback,
  Label,
  Row,
  Col
} from 'reactstrap';
import { Link } from 'react-router-dom';
import { object, func } from 'prop-types';

const EducationForm = ({ errors, touched, values, setFieldValue }) => {
  return (
    <div className="mt-3">
      <Form>
        <FormGroup>
          <Label for="school">School</Label>
          <Input
            tag={Field}
            type="text"
            name="school"
            placeholder="School or Bootcamp"
            invalid={errors.school && touched.school}
            valid={!errors.school && touched.school}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="school" />
        </FormGroup>
        <FormGroup>
          <Label for="Degree">Degree</Label>
          <Input
            tag={Field}
            type="text"
            name="degree"
            placeholder="Degree or Certificate"
            invalid={errors.degree && touched.degree}
            valid={!errors.degree && touched.degree}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="degree" />
        </FormGroup>
        <FormGroup>
          <Label for="fieldofstudy">Field of Study</Label>
          <Input
            tag={Field}
            type="text"
            name="fieldofstudy"
            placeholder="Field of Study"
            invalid={errors.fieldofstudy && touched.fieldofstudy}
            valid={!errors.fieldofstudy && touched.fieldofstudy}
          />
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="fieldofstudy"
          />
        </FormGroup>
        <FormGroup check className="my-2 p-0">
          <Label check className="d-inline">
            <Input
              style={{
                position: 'absolute',
                marginTop: '.4rem',
                marginLeft: '4rem',
                width: '13px'
              }}
              tag={Field}
              id="current"
              type="checkbox"
              name="current"
              checked={values.current}
              onClick={() => setFieldValue('to', '')}
            />
            Current
          </Label>
        </FormGroup>
        <Row>
          <Col md={6}>
            <FormGroup>
              <Label for="form">From Date</Label>
              <Input
                tag={Field}
                type="date"
                name="from"
                invalid={errors.from && touched.from}
                valid={!errors.from && touched.from}
              />
              <FormFeedback tag={ErrorMessage} component="div" name="from" />
            </FormGroup>
          </Col>
          <Col md={6}>
            {!values.current && (
              <FormGroup>
                <Label for="to">To Date</Label>
                <Input
                  tag={Field}
                  type="date"
                  name="to"
                  invalid={errors.to && touched.to}
                  valid={!errors.to && touched.to}
                  disabled={values.current}
                />
                <FormFeedback tag={ErrorMessage} component="div" name="to" />
              </FormGroup>
            )}
          </Col>
        </Row>
        <FormGroup>
          <Label for="description">Description</Label>
          <Input
            tag={Field}
            type="textarea"
            name="description"
            placeholder="Program description"
            invalid={errors.description && touched.description}
            valid={!errors.description && touched.description}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="description" />
        </FormGroup>
        <Button type="submit" color="primary mr-2">
          Submit
        </Button>
        <NavLink tag={Link} className="d-inline p-0" to="/dashboard">
          <Button>Go Back</Button>
        </NavLink>
      </Form>
    </div>
  );
};

EducationForm.propTypes = {
  errors: object,
  touched: object,
  values: object,
  setFieldValue: func
};

export default EducationForm;
