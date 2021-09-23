import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAccordion = styled.div`
  border-bottom: 1px solid var(--grey);

  box-sizing: border-box;
  * {
    box-sizing: inherit;
  }
`;
type StyledHeadingProps = {
  isActive: boolean;
};
const StyledAccordionHeading = styled.div<StyledHeadingProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 2.4rem 0;
  border-radius: 5px;
  width: 100%;
  appearance: none;
  border: 0;
  text-align: left;
  background: transparent;
  color: #111;
  font-size: clamp(1.6rem, 5vw, 1.8rem);
`;
const StyledAccordionToggle = styled(motion.span)`
  display: flex;
  margin-left: 10px;
  transform: rotate(90deg);
  font-size: 2.4rem;
  color: var(--darkGrey);
  align-items: center;
  justify-content: center;
`;
const StyledAccordionContent = styled(motion.div)`
  overflow: hidden;
  color: rgba(0, 0, 0, 0.6);
  height: 0;
  .content {
    padding: 0 0 2rem;
  }
`;

export {
  StyledAccordion,
  StyledAccordionHeading,
  StyledAccordionToggle,
  StyledAccordionContent,
};
