import React from 'react';
import { object } from 'prop-types';
import { Badge, CardBody } from 'reactstrap';
import { isNil, toLower } from 'lodash';

const RepositoryCard = ({ repo }) => {
  const { html_url, name, description, fork, language } = repo;

  const langChoice = (arg) => {
    const lang = toLower(arg);
    switch (lang) {
      case 'javascript':
        return <Badge color="warning">{arg}</Badge>;
      case 'css':
        return <Badge color="success">{arg}</Badge>;
      case 'html':
        return <Badge color="danger">{arg}</Badge>;
      default:
        return <Badge color="primary">{arg}</Badge>;
    }
  };

  const renderBadges = () => (
    <>
      {fork && (
        <Badge className="mr-2" color="info">
          Fork
        </Badge>
      )}
      <Badge className="mr-2" color="dark">
        {repo.private ? 'Private' : 'Public'}
      </Badge>
      {langChoice(language)}
    </>
  );

  return (
    <CardBody className="text-center text-md-left">
      <div>
        <h4>
          <a href={html_url} target="_blank" rel="noreferrer noopener">
            {name}
          </a>
        </h4>
        {!isNil(description) && <p>{description}</p>}
        {renderBadges()}
      </div>
    </CardBody>
  );
};

RepositoryCard.propTypes = {
  repo: object
};

export default RepositoryCard;
