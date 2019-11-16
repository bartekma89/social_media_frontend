import React from 'react';
import ReactDOM from 'react-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { bool, func, string, element } from 'prop-types';

const ModalPortal = ({ modal, onToggle, title, content, actions }) => {
  return ReactDOM.createPortal(
    <Modal centered isOpen={modal} toggle={onToggle}>
      <ModalHeader>{title}</ModalHeader>
      <ModalBody>{content}</ModalBody>
      <ModalFooter>{actions}</ModalFooter>
    </Modal>,
    document.getElementById('modal-root')
  );
};

ModalPortal.propTypes = {
  modal: bool,
  onToggle: func,
  title: string,
  content: string,
  actions: element
};

export default ModalPortal;
