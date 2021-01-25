import styled from 'styled-components';

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
`;

export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background: ${props => props.theme.colors.backdrop};
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 5px;

  background: ${props => props.theme.colors.modal};
`;
