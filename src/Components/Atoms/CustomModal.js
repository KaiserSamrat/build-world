import React from 'react';
import { Modal, ModalBody } from 'reactstrap';

const CustomModal = ({
  open,
  toggle,
  modalMain,
  modalBody,
  children,
  size,
}) => {
  return (
    <React.Fragment>
      <Modal isOpen={open} toggle={toggle} size={size} className={modalMain}>
        <ModalBody className={modalBody}>{children}</ModalBody>
      </Modal>
    </React.Fragment>
  );
};

export default CustomModal;
