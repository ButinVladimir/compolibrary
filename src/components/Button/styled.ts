import styled, { css, ThemedStyledProps } from 'styled-components';

import { ButtonProps } from './props';

export const ButtonElement = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border-radius: 4px;
  border-width: 2px;
  border-style: solid;
  margin: 8px;
  cursor: pointer;
  outline: none;

  ${({ theme, colored, affirmative }: ThemedStyledProps<ButtonProps, any> ) => {
    if (colored) {
      const color = affirmative ? theme.colors.accept : theme.colors.decline;

      return css`
        border-color: ${color};
        background-color: ${color};
        color: ${theme.colors.themeBackground};
      `;
    }

    return css`
      border-color: ${theme.colors.border};
      background-color: ${theme.colors.themeBackground};
      color: ${theme.colors.border};
    `;
  }}

  font-family: ${props => props.theme.fonts.family};
  font-size: ${props => props.theme.fonts.normal.size};
  font-weight: ${props => props.theme.fonts.normal.weight};
  line-height: ${props => props.theme.fonts.normal.lineHeight};

  :focus {
    border-color: ${props => props.theme.colors.focus};
  }

  :active {
    border-width: 2px;
    border-style: solid;
  }

  :disabled {
    opacity: 0.5;
    background-color: ${props => props.theme.colors.inputContainer};
  }
`;