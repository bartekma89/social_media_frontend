import React, { useState } from 'react';
import { Button } from 'reactstrap';
import { func, string } from 'prop-types';
import { isNil } from 'lodash';

import Modal from '../../../components/Modal/Modal.component';

const ProfileDelete = ({ userName, handleDeleteProfile }) => {
  const [modal, setModal] = useState(false);

  const handleToggle = () => setModal(!modal);
  const onDeleteProfile = () => {
    setModal(!modal);
    handleDeleteProfile();
  };

  const actions = (
    <>
      <Button className="my-0" color="danger" onClick={onDeleteProfile}>
        Delete
      </Button>
      <Button className="my-0" color="secondary" onClick={handleToggle}>
        Cancel
      </Button>
    </>
  );

  return (
    <>
      <Button color="danger" onClick={handleToggle}>
        Delete Account
      </Button>
      <Modal
        modal={modal}
        onToggle={handleToggle}
        title="Delete Account"
        content={`${
          !isNil(userName) ? `${userName}, are` : 'Are'
        } you sure you want delete account?`}
        actions={actions}
      />
    </>
  );
};

ProfileDelete.propTypes = {
  handleDeleteProfile: func,
  userName: string
};

export default ProfileDelete;
