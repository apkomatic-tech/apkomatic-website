import { motion } from 'framer-motion';
import React, { useState } from 'react';
import styled from 'styled-components';
import { HiOutlineChevronRight } from 'react-icons/hi';

// styled components
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

// interfaces
interface AccordionProps {
  items: AccordionItem[];
  customStyles: any | undefined | null;
}
interface AccordionItem {
  id: number | string;
  heading: string;
  content: string;
  collapsed: true | false;
}

// hooks
function useAccordion(items: AccordionItem[]) {
  const [accItems, setAccItems] = useState(items);

  const toggleVisibility = id => {
    const index = accItems.findIndex(item => item.id === id);
    if (index > -1) {
      const updatedArrayOfAccItems = [
        ...accItems.slice(0, index),
        {
          ...accItems[index],
          collapsed: !accItems[index].collapsed,
        },
        ...accItems.slice(index + 1),
      ];
      setAccItems(updatedArrayOfAccItems);
    }
  };

  return {
    accItems,
    toggleVisibility,
  };
}

const Accordion = ({ items, customStyles }: AccordionProps) => {
  const { accItems, toggleVisibility } = useAccordion(items);

  // id, heading, content, collapsed
  return (
    <div style={customStyles}>
      {accItems.map(({ id, heading, content, collapsed }) => {
        return (
          <StyledAccordion key={id}>
            <StyledAccordionHeading
              isActive={!collapsed}
              role="button"
              tabIndex={0}
              onClick={() => toggleVisibility(id)}
              onKeyPress={event => {
                const { key } = event;
                if (key === 'Enter') {
                  toggleVisibility(id);
                }
              }}
            >
              <span>{heading}</span>
              <StyledAccordionToggle
                transition={{
                  easings: 'linear',
                  duration: 0.2,
                }}
                initial={{
                  rotate: '90deg',
                }}
                animate={{
                  rotate: collapsed ? '90deg' : '-90deg',
                }}
              >
                <HiOutlineChevronRight />
              </StyledAccordionToggle>
            </StyledAccordionHeading>
            <StyledAccordionContent
              aria-expanded={!collapsed}
              initial={false}
              transition={{
                easings: 'linear',
                duration: 0.2,
              }}
              animate={{
                height: collapsed ? 0 : 'auto',
              }}
            >
              <div className="content">{content}</div>
            </StyledAccordionContent>
          </StyledAccordion>
        );
      })}
    </div>
  );
};

export default Accordion;
