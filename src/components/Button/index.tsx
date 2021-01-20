import React, { FC, ReactElement, forwardRef, PropsWithRef } from 'react';

import { ButtonProps } from './props'
import { ButtonElement } from './styled';

const Button: FC<PropsWithRef<ButtonProps>> = forwardRef<HTMLButtonElement, ButtonProps>((
  {
    colored,
    affirmative,
    ...buttonProps
  }: ButtonProps,
  ref,
): ReactElement => (
  <ButtonElement
    ref={ref}
    colored={colored}
    affirmative={affirmative}
    {...buttonProps}
  />
));

Button.displayName = 'Button';

export default Button;