import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import clearIcon from '../assets/clear.svg';

export const InputContainer = styled.div`
  box-sizing: border-box;
  display: block;
  position: relative;

  background-color: ${props => props.theme.colors.inputContainer};

  margin: 8px;
  width: calc(100% - 16px);
  border-radius: 4px;
  padding: 5px 10px 10px;
`;

export const InputLabel = styled.div`
  margin-bottom: 5px;

  color: ${props => props.theme.colors.label};

  font-family: ${props => props.theme.fonts.family};
  font-size: ${props => props.theme.fonts.small.size};
  line-height: ${props => props.theme.fonts.small.lineHeight};
  font-weight: ${props => props.theme.fonts.small.weight};
`;

export const InputElementContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const InputClearButton = styled.button.attrs(() => ({
  type: 'button',
}))`
  border: none;
  outline: none;
  background: url(${clearIcon}) center / contain;
  width: 14px;
  height: 14px;
  right: 5px;
  top: calc(50% - 7px);
  opacity: 0.5;
  cursor: pointer;
  position: absolute;
  
  :hover {
    opacity: 1;
  }
`;

interface AddInputProps extends InputHTMLAttributes<HTMLInputElement> {
  showClearButton: boolean,
}

export const InputElement = styled.input`
  line-height: 28px;
  height: 28px;
  padding: 7px ${({ showClearButton }: AddInputProps) => (showClearButton ? '24px' : '5px')} 7px 5px;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;
  box-sizing: border-box;

  background: ${props => props.theme.colors.inputBackground};
  color: ${props => props.theme.colors.input};
  border-color: ${props => props.theme.colors.border};

  font-family: ${props => props.theme.fonts.family};
  font-size: ${props => props.theme.fonts.normal.size};
  font-weight: ${props => props.theme.fonts.normal.weight};

  ::placeholder {
    color: ${props => props.theme.colors.placeholder};
  }

  :focus {
    outline: none;
    border-color: ${props => props.theme.colors.input};
  }

  :disabled {
    background-color: ${props => props.theme.colors.inputContainer};
  }
`;