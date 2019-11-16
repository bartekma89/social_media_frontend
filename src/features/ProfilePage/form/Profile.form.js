import React, { useState } from 'react';
import { Form, Field, ErrorMessage } from 'formik';
import {
  Button,
  NavLink,
  Input,
  Label,
  FormGroup,
  FormText,
  FormFeedback
} from 'reactstrap';
import { Link } from 'react-router-dom';
import * as Icon from 'react-feather';
import { object } from 'prop-types';

const ProfileForm = ({ errors, touched }) => {
  const [displaySocialInputs, toggleDispalySocialInputs] = useState(false);

  const onToggleDispalySocialInputs = () =>
    toggleDispalySocialInputs(!displaySocialInputs);

  return (
    <Form className="mt-3">
      <FormGroup>
        <Label for="status">Status</Label>
        <Input
          tag={Field}
          name="status"
          type="select"
          component="select"
          invalid={errors.status && touched.status}
          valid={!errors.status && touched.status}
        >
          <option value="">Select Professional Status</option>
          <option value="Developer">Developer</option>
          <option value="Junior Developer">Junior Developer</option>
          <option value="Senior Developer">Senior Developer</option>
          <option value="Manager">Manager</option>
          <option value="Student or Learning">Student or Learning</option>
          <option value="Instructor">Instructor</option>
          <option value="Intern">Intern</option>
          <option value="Other">Other</option>
        </Input>
        <FormFeedback tag={ErrorMessage} component="div" name="status" />
        <FormText className="d-block">
          Give us an idea of where you are at in your career
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="handle">Handle</Label>
        <Input
          tag={Field}
          type="text"
          name="handle"
          placeholder="user_user"
          invalid={errors.handle && touched.handle}
          valid={!errors.handle && touched.handle}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="handle" />
        <FormText>Handle to navigate your profile</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="company">Company</Label>
        <Input
          tag={Field}
          type="text"
          name="company"
          placeholder="Company Inc."
          invalid={errors.company && touched.company}
          valid={!errors.company && touched.company}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="company" />
        <FormText>Could be your onw company or one you work for</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="website">Website</Label>
        <Input
          tag={Field}
          type="text"
          name="website"
          placeholder="http(s)://www.yourwebsite.io"
          invalid={errors.website && touched.website}
          valid={!errors.website && touched.website}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="website" />
        <FormText>Could be your own or a company website</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="location">Location</Label>
        <Input
          tag={Field}
          type="text"
          name="location"
          placeholder="Łódź, PL"
          invalid={errors.location && touched.location}
          valid={!errors.location && touched.location}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="location" />
        <FormText>City & Country</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="skills">Skills</Label>
        <Input
          tag={Field}
          type="text"
          name="skills"
          placeholder="* Skills"
          invalid={errors.skills && touched.skills}
          valid={!errors.skills && touched.skills}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="skills" />
        <FormText>
          Please use comma separated values (eg. HTML, CSS, Javascript, React)
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label for="githubusername">Github username</Label>
        <Input
          tag={Field}
          type="text"
          name="githubusername"
          placeholder="Github username"
          invalid={errors.githubusername && touched.githubusername}
          valid={!errors.githubusername && touched.githubusername}
        />
        <FormFeedback
          tag={ErrorMessage}
          component="div"
          name="githubusername"
        />
        <FormText>If you want show your repos, include your username</FormText>
      </FormGroup>
      <FormGroup>
        <Label for="bio">Bio</Label>
        <Input
          tag={Field}
          type="textarea"
          name="bio"
          placeholder="A short bio of yourself"
          invalid={errors.bio && touched.bio}
          valid={!errors.bio && touched.bio}
        />
        <FormFeedback tag={ErrorMessage} component="div" name="bio" />
        <FormText>Tell us a little about yourself</FormText>
      </FormGroup>
      <div className="my-2">
        <Button
          className="btn-250-width mr-2"
          size="sm"
          onClick={onToggleDispalySocialInputs}
        >
          Add Social Network Links
        </Button>
        <span>Optional</span>
      </div>
      {displaySocialInputs && (
        <FormGroup>
          <div className="d-flex my-2">
            <Icon.Twitter color="lightblue" size={42} className="mr-3" />
            <Input
              tag={Field}
              type="text"
              name="twitter"
              placeholder="Twitter URL"
              invalid={errors.twitter && touched.twitter}
              valid={!errors.twitter && touched.twitter}
            />
          </div>
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="twitter"
            className="d-block error-label"
          />
          <div className="d-flex my-2">
            <Icon.Facebook color="blue" size={42} className="mr-3" />
            <Input
              tag={Field}
              type="text"
              name="facebook"
              placeholder="Facebook URL"
              invalid={errors.facebook && touched.facebook}
              valid={!errors.facebook && touched.facebook}
            />
          </div>
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="facebook"
            className="d-block error-label"
          />
          <div className="d-flex my-2">
            <Icon.Youtube color="red" size={42} className="mr-3" />
            <Input
              tag={Field}
              type="text"
              name="youtube"
              placeholder="Youtube URL"
              invalid={errors.youtube && touched.youtube}
              valid={!errors.youtube && touched.youtube}
            />
          </div>
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="youtube"
            className="d-block error-label"
          />
          <div className="d-flex my-2">
            <Icon.Linkedin color="lightblue" size={42} className="mr-3" />
            <Input
              tag={Field}
              type="text"
              name="linkedin"
              placeholder="LinkedIn URL"
              invalid={errors.linkedin && touched.linkedin}
              valid={!errors.linkedin && touched.linkedin}
            />
          </div>
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="linkedin"
            className="d-block error-label"
          />
          <div className="d-flex my-2">
            <Icon.Instagram color="brown" size={42} className="mr-3" />
            <Input
              tag={Field}
              type="text"
              name="instagram"
              placeholder="Instagram URL"
              invalid={errors.instagram && touched.instagram}
              valid={!errors.instagram && touched.instagram}
            />
          </div>
          <FormFeedback
            tag={ErrorMessage}
            component="div"
            name="instagram"
            className="d-block error-label"
          />
        </FormGroup>
      )}
      <Button type="submit" color="primary mr-2">
        Submit
      </Button>
      <Button className="mr-2 ml-0" type="reset">
        Reset
      </Button>
      <NavLink tag={Link} className="d-inline p-0" to="/dashboard">
        <Button>Go Back</Button>
      </NavLink>
    </Form>
  );
};

ProfileForm.propTypes = {
  errors: object,
  touched: object
};

export default ProfileForm;
