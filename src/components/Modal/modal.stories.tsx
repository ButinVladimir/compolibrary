import React, { FC, useState } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from '../Button';
import Modal from './';
import ModalsProvider from './ModalsContext';
import ModalsArea, { DefaultModalsAreaId } from './ModalsArea';
import { ModalProps } from './props';

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    containerId: {
      name: 'Modal container ID',
      control: { type: 'text' },
      defaultValue: DefaultModalsAreaId,
    },
  },
  args: {},
  parameters: {},
} as Meta<ModalProps>;



export const Basic: Story<ModalProps> = ({ containerId }: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <ModalsProvider>
      <Button onClick={showModal} colored affirmative>
        Show modal
      </Button>
      <ModalsArea id={containerId} />

      {modalVisible && (
        <Modal containerId={containerId} onClose={hideModal} style={{ padding: 30 }}>
          <Button onClick={hideModal} colored affirmative={false}>
            Hide modal
          </Button>
        </Modal>
      )}
    </ModalsProvider>
  );
};



export const Mested: Story<ModalProps> = ({ containerId }: ModalProps) => {
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };

  return (
    <ModalsProvider>
      <Button onClick={showModal} colored affirmative>
        Show modal
      </Button>
      <ModalsArea id={containerId} />

      {modalVisible && (
        <NestedModal
          containerId={containerId}
          number={1}
          onClose={hideModal}
        />
      )}
    </ModalsProvider>
  );
};

interface NestedModalProps {
  containerId: string,
  number: number,
  onClose: () => void,
}

const NestedModal: FC<NestedModalProps> = ({ containerId, number, onClose }: NestedModalProps) => {
  const [nestedModalVisible, setNestedModalVisible] = useState(false);

  const showNestedModal = () => {
    setNestedModalVisible(true);
  };
  const hideNestedModal = () => {
    setNestedModalVisible(false);
  };

  return (
    <Modal containerId={containerId} onClose={onClose} style={{ padding: 30 }}>
      <div style={{ padding: 5 }}>
        Modal number: {number}
      </div>

      <div style={{ padding: 5 }}>
        <Button onClick={showNestedModal} colored affirmative>
          Open nested modal
        </Button>
      </div>

      <div style={{ padding: 5 }}>
        <Button onClick={onClose} colored affirmative={false}>
          Hide this modal
        </Button>
      </div>

      {nestedModalVisible && (
        <NestedModal
          containerId={containerId}
          number={number + 1}
          onClose={hideNestedModal}
        />
      )}
    </Modal>
  );
};
