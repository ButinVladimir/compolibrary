import React, { FC, InputHTMLAttributes, ComponentType, ReactElement, forwardRef, PropsWithRef, PropsWithChildren } from 'react';

import {
  InputContainer,
  InputLabel,
  InputElementContainer,
  InputClearButton,
  InputElement,
} from './styled';

export interface InputProps<CP = any, LP = any> extends InputHTMLAttributes<HTMLInputElement> {
  containerComponent?: ComponentType<PropsWithChildren<CP>>,
  containerProps?: CP,
  label: ReactElement<LP> | string,
  showClearButton?: boolean,
  onClear?: (event: React.FormEvent<HTMLButtonElement>) => void,
}

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