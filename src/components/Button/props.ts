import { InputHTMLAttributes } from 'react';

export interface ButtonProps extends InputHTMLAttributes<HTMLButtonElement> {
  colored?: boolean,
  affirmative?: boolean,
}
