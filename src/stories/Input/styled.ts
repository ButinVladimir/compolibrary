import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

import clearIcon from '../assets/clear.svg';

export const InputContainer = styled.div`
  box-sizing: border-box;
  border-radius: 4px;
  padding: 5px 10px 10px;
  background-color: #f9f9f9;
  display: block;
  width: calc(100% - 16px);
  position: relative;
  margin: 8px;
`;

export const InputLabel = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #a5a5a5;
  margin-bottom: 5px;
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
  font-size: 14px;
  line-height: 28px;
  height: 28px;
  padding: 7px ${({ showClearButton }: AddInputProps) => (showClearButton ? '24px' : '5px')} 7px 5px;
  color: #5a5a5a;
  width: 100%;
  border: 1px solid #dadada;
  border-radius: 4px;
  background: #fff;
  box-sizing: border-box;

  ::placeholder {
    color: #a5a5a5;
  }

  :focus {
    outline: none;
    border: 1px solid #5a5a5a;
  }

  :disabled {
    background: #f9f9f9;
  }
`;