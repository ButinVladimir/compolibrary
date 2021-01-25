import React, { FC, useContext } from 'react';

import { ModalsBlock } from './styled';
import { ModalsContext } from '../ModalsContext';
import { ModalsAreaProps } from './props';

export const DefaultModalsAreaId = 'modals-area';

const ModalsArea: FC<ModalsAreaProps> = ({
  id = DefaultModalsAreaId,
  style = {},
  ...props
}: ModalsAreaProps) => {
  const { opened } = useContext(ModalsContext);

  return (
    <ModalsBlock
      id={id}
      style={{
        ...style,
        display: opened > 0 ? 'block' : 'none',
      }}
      {...props}
    />
  );
};

export default ModalsArea;