import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styled from 'styled-components';

import { StyledPrimaryButton } from './Button';

const StyledModalBackdrop = styled(motion.div)`
  background: rgba(1, 1, 1, 0.5);
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
`;
const StyledModalContainer = styled(motion.section)`
  background: var(--white);
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
  margin: 5rem auto 0 auto;
  max-width: 40rem;
  padding: 2.2rem;
  img {
    display: block;
    height: auto;
    margin: 0 auto 3rem auto;
    max-width: 30rem;
    width: 100%;
  }
`;

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
