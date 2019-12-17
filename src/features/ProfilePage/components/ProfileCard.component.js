import React from 'react';
import { object } from 'prop-types';
import { isNil, get, isEmpty } from 'lodash';
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
  Globe
} from 'react-feather';

const ProfileCard = ({ profile }) => {
  const { user, company, location, status, social, website } = profile || {};
  const userName = get(user, 'username', '');

  return (
    <div className="mt-3 mb-2 py-4 cardbox">
      <img
        className="rounded-circle mb-3"
        src={get(user, 'avatar', '')}
        alt={get(user, ' username')}
      />
      <h1 className="large">{userName}</h1>
      <p className="lead">
        {status} {!isNil(company) && <span>at {company}</span>}
      </p>
      <p>{!isNil(location) && location}</p>
      {!isEmpty(website) && (
        <a
          className="mx-1"
          href={website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Globe size="30" />
        </a>
      )}
      {!isNil(social) && !isEmpty(social.twitter) && (
        <a
          className="mx-1"
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Twitter size="30" color="lightblue" />
        </a>
      )}
      {!isNil(social) && !isEmpty(social.linkedin) && (
        <a
          className="mx-1"
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size="30" color="blue" />
        </a>
      )}
      {!isNil(social) && !isEmpty(social.youtube) && (
        <a
          className="mx-1"
          href={social.youtube}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Youtube size="30" color="red" />
        </a>
      )}
      {!isNil(social) && !isEmpty(social.instagram) && (
        <a
          className="mx-1"
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Instagram size="30" color="brown" />
        </a>
      )}
      {!isNil(social) && !isEmpty(social.facebook) && (
        <a
          className="mx-1"
          href={social.facebook}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Facebook size="30" color="darkblue" />
        </a>
      )}
    </div>
  );
};

ProfileCard.propTypes = {
  profile: object
};

export default ProfileCard;
