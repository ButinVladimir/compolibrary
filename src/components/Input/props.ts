import{ InputHTMLAttributes, ComponentType, ReactElement, PropsWithChildren } from 'react';

export interface InputElementProps extends InputHTMLAttributes<HTMLInputElement> {
  showClearButton?: boolean,
}

export interface InputProps<CP = any, LP = any> extends InputElementProps {
  containerComponent?: ComponentType<PropsWithChildren<CP>>,
  containerProps?: CP,
  label: ReactElement<LP> | string,
  onClear?: (event: React.FormEvent<HTMLButtonElement>) => void,
}