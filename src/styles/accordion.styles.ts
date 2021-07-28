import styled from 'styled-components';
import { motion } from 'framer-motion';

const StyledAccordion = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);

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
  padding: 1.5rem;
  border-radius: 5px;
  width: 100%;
  appearance: none;
  border: 0;
  text-align: left;
  background: ${props => (props.isActive ? 'var(--darkColor)' : 'transparent')};
  color: ${props => (props.isActive ? 'var(--white)' : 'var(--baseTextColor)')};
  &:hover,
  &:focus {
    background: var(--darkColor);
    color: var(--white);
  }
`;
const StyledAccordionToggle = styled(motion.span)`
  display: block;
  margin-left: 10px;
  transform: rotate(90deg);
  font-size: 1.3rem;
`;
const StyledAccordionContent = styled(motion.div)`
  overflow: hidden;
  color: rgba(#111, 0.7);
  height: 0;
  .content {
    padding: 2rem;
  }
`;

export {
  StyledAccordion,
  StyledAccordionHeading,
  StyledAccordionToggle,
  StyledAccordionContent,
};
