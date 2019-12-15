import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { isNil } from 'lodash';
import { func, object } from 'prop-types';
import { Row } from 'reactstrap';

import LoadingWrapper from '../../components/LoadingWrapper/LoadingWrapper.component';
import { getAllProfiles } from '../../actions/profile';
import { getProfiles } from '../../selectors';
import ProfileItem from './components/ProfileItem.component';

import './Profiles.scss';

const Profiles = ({ getAllProfiles, profiles: { fetching, data, error } }) => {
  useEffect(() => {
    getAllProfiles();
  }, [getAllProfiles]);

  return (
    <div className="container custom-container m-3 mx-auto">
      <div className="text-center-md-down">
        <LoadingWrapper size={96} active={fetching}>
          <h1 className="large text-primary mb-5">Developers</h1>
          <Row>
            {!isNil(data) ? (
              data.map((profile) => (
                <ProfileItem key={profile._id} profile={profile} />
              ))
            ) : (
              <h4>{error}</h4>
            )}
          </Row>
        </LoadingWrapper>
      </div>
    </div>
  );
};

Profiles.propTypes = {
  getAllProfiles: func,
  profiles: object
};

const mapStateToProps = (state) => ({
  profiles: getProfiles(state)
});

const mapDispatchToProps = {
  getAllProfiles
};

export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
