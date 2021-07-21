import styled from 'styled-components';
import { motion } from 'framer-motion';

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

export { StyledModalBackdrop, StyledModalContainer };
