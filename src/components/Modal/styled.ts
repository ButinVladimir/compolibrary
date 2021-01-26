import styled from 'styled-components';

export const ModalBackdrop = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;

  :last-child ${ModalBackdrop} {
    background: ${props => props.theme.colors.backdrop};
  } 
`;

export const ModalWindow = styled.div`
  position: relative;
  padding: 5px;
  border-radius: 5px;
  overflow: hidden;

  background: ${props => props.theme.colors.modal};
  box-shadow: 2px 2px 5px ${props => props.theme.colors.backdrop};
`;
