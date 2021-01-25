import React, { FC, useContext, useEffect } from 'react';
import { createPortal } from 'react-dom';

import { ModalProps } from './props';
import { ModalContainer, ModalBackdrop, ModalWindow } from './styled';
import { DefaultModalsAreaId } from './ModalsArea'
import { ModalsContext } from './ModalsContext'

const Modal: FC<ModalProps> = ({
  containerId = DefaultModalsAreaId,
  onClose,
  ...props
}) => {
  const container = document.getElementById(containerId);
  const { onOpenModal, onCloseModal } = useContext(ModalsContext);

  useEffect(() => {
    onOpenModal();

    return () => onCloseModal();
  });

  if (!container) {
    return null;
  }

  const handleBackdropClick = () => {
    onClose();
  }

  return createPortal(
    <ModalContainer>
      <ModalBackdrop onClick={handleBackdropClick} />
      <ModalWindow {...props} />
    </ModalContainer>,
    container,
  );
};

export default Modal;
