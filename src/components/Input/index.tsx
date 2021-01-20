import React, { FC, ReactElement, forwardRef, PropsWithRef } from 'react';

import { InputProps } from './props';
import {
  InputContainer,
  InputLabel,
  InputElementContainer,
  InputClearButton,
  InputElement,
} from './styled';

const Input: FC<PropsWithRef<InputProps>> = forwardRef<HTMLInputElement, InputProps>((
  {
    containerComponent: ContainerComponent = InputContainer,
    containerProps = {},
    label,
    showClearButton = false,
    onClear = undefined,
    ...inputProps
  }: InputProps,
  ref,
): ReactElement => (
  <ContainerComponent {...containerProps}>
    <InputLabel>
      {label}
    </InputLabel>

    <InputElementContainer>
      <InputElement ref={ref} showClearButton={showClearButton} {...inputProps} />

      {showClearButton && <InputClearButton onClick={onClear} />}
    </InputElementContainer>
  </ContainerComponent>
));

Input.displayName = 'Input';

export default Input;