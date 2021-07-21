import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import { StyledPrimaryButton } from './Button';
import {
  StyledModalBackdrop,
  StyledModalContainer,
} from '../styles/modal.styles';

interface ModalProps {
  show: boolean;
  onClose?: () => any;
  onOpen?: () => any;
  showCloseBtn?: boolean;
  closeBtnText?: string;
  children: any;
}
const backdropVariants = {
  visible: {
    opacity: 1,
    transition: {
      when: 'beforeChildren',
    },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: 'afterChildren',
    },
  },
};
const modalVariants = {
  visible: {
    opacity: 1,
  },
  hidden: {
    opacity: 0,
  },
};
export default function Modal({
  onOpen,
  onClose,
  show,
  children,
  showCloseBtn = true,
  closeBtnText = 'Close',
}: ModalProps) {
  useEffect(() => {
    if (onOpen && show) {
      if (typeof onOpen === 'function') {
        onOpen();
      }
    }
  }, [show]);
  return (
    <AnimatePresence exitBeforeEnter>
      {show && (
        <StyledModalBackdrop
          key="backdrop"
          variants={backdropVariants}
          animate="visible"
          initial="hidden"
          exit="hidden"
          onClick={() => {
            if (typeof onClose === 'function') {
              onClose();
            }
          }}
        >
          <StyledModalContainer
            data-testid="modal-container"
            key="modal"
            variants={modalVariants}
          >
            {children}
            {showCloseBtn && (
              <StyledPrimaryButton
                onClick={onClose}
                type="button"
                style={{
                  display: 'block',
                  width: '100%',
                }}
              >
                {closeBtnText}
              </StyledPrimaryButton>
            )}
          </StyledModalContainer>
        </StyledModalBackdrop>
      )}
    </AnimatePresence>
  );
}
