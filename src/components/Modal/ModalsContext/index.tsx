import React, { FC, createContext, useState, PropsWithChildren } from 'react';

export interface IModalsContext {
  opened: number,
  onOpenModal: () => void,
  onCloseModal: () => void,
}

export const ModalsContext = createContext<IModalsContext>({
  opened: 0,
  onOpenModal: () => undefined,
  onCloseModal: () => undefined,
});



const ModalsProvider: FC<PropsWithChildren<void>> = ({ children }: PropsWithChildren<void>) => {
  const [opened, setOpened] = useState(0);
  
  const handleOpenModal = () => {
    setOpened(value => value + 1);
  };
  const handleCloseModal = () => {
    setOpened(value => value - 1);
  };

  const Provider = ModalsContext.Provider;

  return (
    <Provider value={{
      opened,
      onOpenModal: handleOpenModal,
      onCloseModal: handleCloseModal,
    }}>
      {children}
    </Provider>
  );
};

export default ModalsProvider;