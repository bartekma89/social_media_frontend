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

const ExperienceForm = ({ errors, touched, values, setFieldValue }) => {
  return (
    <div className="mt-3">
      <Form>
        <FormGroup>
          <Label for="title">Job Title</Label>
          <Input
            tag={Field}
            type="text"
            name="title"
            placeholder="Developer or Project Manager"
            invalid={errors.title && touched.title}
            valid={!errors.title && touched.title}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="title" />
        </FormGroup>
        <FormGroup>
          <Label for="company">Company</Label>
          <Input
            tag={Field}
            type="text"
            name="company"
            placeholder="Company name"
            invalid={errors.company && touched.company}
            valid={!errors.company && touched.company}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="company" />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location</Label>
          <Input
            tag={Field}
            type="text"
            name="location"
            placeholder="London, ENG"
            invalid={errors.location && touched.location}
            valid={!errors.location && touched.location}
          />
          <FormFeedback tag={ErrorMessage} component="div" name="location" />
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
            placeholder="Job description"
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

ExperienceForm.propTypes = {
  errors: object,
  touched: object,
  values: object,
  setFieldValue: func
};

export default ExperienceForm;
