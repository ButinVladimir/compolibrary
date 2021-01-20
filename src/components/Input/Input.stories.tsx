import React, { useState, useRef, PropsWithChildren } from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { useTheme } from 'styled-components';

import Input from './';
import Button from '../Button';
import { InputProps } from './props';
import { InputContainer } from './styled';

export default {
  title: 'Components/Input',
  component: Input,
  decorators: [(StoryToShow) => (
    <div style={{
      width: 300,
      maxWidth: '100%',
    }}>
      <StoryToShow />
    </div>)
  ],
  argTypes: {
    label: {
      name: 'Label',
      control: { type: 'text' },
      description: 'Can be component or string',
    },
    placeholder: {
      name: 'Placeholder',
      control: { type: 'text' },
    },
    maxLength: {
      name: 'Max length',
      control: { type: 'number', min: 0 },
    },
    disabled: {
      name: 'Disabled',
      control: { type: 'boolean' },
    },
    type: {
      name: 'Type',
      control: {
        type: 'select',
        options: [
          'text',
          'number',
          'password',
        ]
      },
      defaultValue: 'text',
    },
    showClearButton: {
      name: 'Show clear button',
      control: { type: 'boolean' },
      defaultValue: true,
    },
    containerComponent: { control: { disable: true } },
    containerProps: { control: { disable: true } },
  },
  args: {
    label: 'Field name',
    placeholder: 'Enter text here...',
    maxLength: 15,
  },
  parameters: {

  }
} as Meta<InputProps>;

const restrictedArgTypes = {
  label: { control: { disable: true } },
  maxLength: { control: { disable: true } },
  type: { control: { disable: true } },
  showClearButton: { control: { disable: true } },
  onClear: { control: { disable: true } },
};



export const Basic: Story<InputProps> = ({ label, placeholder, maxLength, disabled, type, showClearButton, onClear }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const inputRef = useRef<HTMLInputElement>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const handleClear = (event: React.FormEvent<HTMLButtonElement>) => {
    setValue('');
    onClear && onClear(event);
  }

  return (
    <Input
      ref={inputRef}
      label={label}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      value={value}
      type={type}
      showClearButton={showClearButton}
      onChange={handleChange}
      onClear={handleClear}
    />
  );
};



export const WithCustomLabel: Story<InputProps> = ({ placeholder, maxLength, disabled }: InputProps) => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(+event.currentTarget.value);
  };
  const handleLabelClick = () => {
    setValue(Math.round(Math.random() * 100));
  };

  return (
    <Input
      label={(
        <Button type="button" onClick={handleLabelClick} style={{ margin: 0 }}>
          Set random number
        </Button>
      )}
      placeholder={placeholder}
      maxLength={maxLength}
      disabled={disabled}
      value={value}
      type="number"
      onChange={handleChange}
    />
  );
};

WithCustomLabel.argTypes = restrictedArgTypes;



export const WithCustomContainer: Story<InputProps> = ({ placeholder, disabled }: InputProps) => {
  const [value, setValue] = useState<string>('');
  const [status, setStatus] = useState<number>(0);

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  };
  const handleFocus = () => {
    setStatus(0);
  }
  const handleBlur = () => {
    setStatus(value.length >= 2 && value.length <= 10 ? 1 : -1);
  }

  return (
    <Input
      label="Enter value with length between 2 and 10 characters"
      placeholder={placeholder}
      maxLength={100}
      disabled={disabled}
      value={value}
      type="text"
      containerComponent={CustomInputContainer}
      containerProps={{ status }}
      onChange={handleChange}
      onFocus={handleFocus}
      onBlur={handleBlur}
    />
  );
};

interface CustomInputContainerProps {
  status: 1 | 0 | -1,
}

const CustomInputContainer: React.FC<PropsWithChildren<CustomInputContainerProps>> = ({ status, children }: PropsWithChildren<CustomInputContainerProps>) => {
  const theme: any = useTheme();
  let backgroundColor = theme.colors.inputContainer;

  if (status === 1) {
    backgroundColor = '#daffda';
  } else if (status === -1) {
    backgroundColor = '#ffdada';
  }

  return (
    <InputContainer style={{backgroundColor: backgroundColor}}>
      {children}
    </InputContainer>
  );
};

WithCustomLabel.argTypes = restrictedArgTypes;
