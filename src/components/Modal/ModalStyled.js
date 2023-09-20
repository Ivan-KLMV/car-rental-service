import styled from 'styled-components';

export const ModalStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(18, 20, 23, 0.5);
  overflow: hidden;
  z-index: 1200;

  & > div {
    /* max-width: calc(100vw - 48px);
    max-height: calc(100vh - 24px); */
  }
`;
