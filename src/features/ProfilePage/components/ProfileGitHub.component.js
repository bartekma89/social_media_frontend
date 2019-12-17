import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { get, isNil, isEmpty } from 'lodash';
import { Card, CardTitle } from 'reactstrap';

import { fetchGithubRepos } from '../../../actions/profile';
import { getGithubRepos } from '../../../selectors';
import LoadingWrapper from '../../../components/LoadingWrapper/LoadingWrapper.component';
import RepositoryCard from './RepositoryCard.component';

const ProfileGitHub = ({ githubUsername, fetchGithubRepos, repos }) => {
  const fetching = get(repos, 'fetching');
  const reposData = get(repos, 'data');

  useEffect(() => {
    if (!isNil(githubUsername)) {
      fetchGithubRepos(githubUsername);
    }
  }, [fetchGithubRepos, githubUsername]);

  return (
    <LoadingWrapper active={fetching}>
      <Card className="my-2 cardbox" body>
        <CardTitle>
          <h3 className="heading">GitHub Repositories</h3>
        </CardTitle>
        {!isEmpty(reposData) ? (
          reposData.map((repo) => (
            <div key={repo.id}>
              <hr className="m-0" />
              <RepositoryCard repo={repo} />
            </div>
          ))
        ) : (
          <h5>Repository is empty</h5>
        )}
      </Card>
    </LoadingWrapper>
  );
};

const mapStateToProps = (state) => ({
  repos: getGithubRepos(state)
});

const mapDispatchToProps = {
  fetchGithubRepos
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileGitHub);
