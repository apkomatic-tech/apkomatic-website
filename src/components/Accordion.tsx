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

  const toggleVisibility = (id: number | string) => {
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

const Accordion = ({ items }: AccordionProps) => {
  const { accItems, toggleVisibility } = useAccordion(items);

  // id, heading, content, collapsed
  return (
    <div
      style={{
        marginTop: '2rem',
      }}
    >
      {accItems.map(({ id, heading, content, collapsed }) => {
        return (
          <StyledAccordion key={id} data-testid="accordion-item">
            <StyledAccordionHeading
              isActive={!collapsed}
              tabIndex={0}
              onClick={() => toggleVisibility(id)}
              aria-expanded={!collapsed}
              aria-controls={`accordion_item_${id}`}
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
              id={`accordion_item_${id}`}
              data-testid="accordion-content"
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
