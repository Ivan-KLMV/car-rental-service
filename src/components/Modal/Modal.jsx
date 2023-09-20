import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { ModalStyled } from './ModalStyled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClickProp, children }) => {
  useEffect(() => {
    window.addEventListener('keydown', escCloseHandle);
    return () => {
      window.removeEventListener('keydown', escCloseHandle);
    };
  });

  function escCloseHandle(e) {
    if (e.code === 'Escape') {
      onClickProp();
    }
  }

  function backDropClick(e) {
    if (e.target === e.currentTarget) {
      onClickProp();
    }
  }

  return createPortal(
    <ModalStyled onClick={backDropClick}>{children}</ModalStyled>,
    modalRoot
  );
};
