import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Button from './';
import { ButtonProps } from './props';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    colored: {
      name: 'Colored',
      description: 'Button is filled with color',
      control: { type: 'boolean' },
    },
    affirmative: {
      name: 'Affirmative',
      description: 'What color button should use. Only matters',
      control: { type: 'boolean' },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
    },
    onClick: {
      action: 'Click',
    }
  },
  args: {},
  parameters: {},
} as Meta<ButtonProps>;



export const Basic: Story<ButtonProps> = ({ disabled, value, colored, affirmative, children, onClick }: ButtonProps) => {
  return (
    <Button
      disabled={disabled}
      value={value}
      colored={colored}
      affirmative={affirmative}
      onClick={onClick}
    >
      {children}
    </ Button>
  );
};

Basic.argTypes = {
  children: {
    name: 'Content',
    control: { type: 'text' },
    defaultValue: 'Cancel',
  }
}