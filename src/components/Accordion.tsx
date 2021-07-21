import React, { useState } from 'react';
import { HiOutlineChevronRight } from 'react-icons/hi';
import {
  StyledAccordion,
  StyledAccordionContent,
  StyledAccordionHeading,
  StyledAccordionToggle,
} from '../styles/accordion.styles';

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
          <StyledAccordion key={id} data-testid="accordion-item">
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
              data-testid="accordion-content"
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
