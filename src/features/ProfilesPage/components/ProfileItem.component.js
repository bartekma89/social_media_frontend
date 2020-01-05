import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Badge,
  Row,
  Col,
  NavLink
} from 'reactstrap';
import { isEmpty } from 'lodash';
import { Link } from 'react-router-dom';

const ProfileItem = ({
  profile: {
    user: { _id, username, avatar },
    status,
    company,
    location,
    skills
  }
}) => {
  return (
    <Col xs="12" sm="6" md="12">
      <Card className="my-3 profileItem-width p-2 p-md-0">
        <Row>
          <Col xs="12" md="3" className="d-flex">
            <img
              src={avatar}
              className="img-fluid align-self-center mx-auto rounded-circle"
              alt="avatar"
            />
          </Col>
          <Col xs="12" md="6" xl="7">
            <CardBody className="justify-content-md-center">
              <CardTitle>
                <h4>{username}</h4>
              </CardTitle>
              <CardSubtitle>
                {status}
                {!isEmpty(company) && ` | ${company}`}
                {!isEmpty(location) && ` | ${location}`}
              </CardSubtitle>
              {skills.map((skill, index) => (
                <Badge
                  key={`${index}_${skill}`}
                  color="info"
                  className="mr-2 mt-2 mt-md-0"
                >
                  {skill}
                </Badge>
              ))}
            </CardBody>
          </Col>
          <Col xs="12" md="3" xl="2" className="d-md-flex">
            <CardBody className="justify-content-md-center align-self-center p-0">
              <NavLink tag={Link} className="p-0" to={`/profile/${_id}`}>
                <Button color="success" className="d-block mx-auto mt-0 m-md-0">
                  View profile
                </Button>
              </NavLink>
            </CardBody>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default ProfileItem;
