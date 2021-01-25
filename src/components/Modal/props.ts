import { HTMLAttributes } from 'react';

export interface ModalProps extends HTMLAttributes<HTMLDivElement> {
  containerId: string,
  onClose: () => void,
}
