import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent, getByText } from '@testing-library/react';

import Accordion from '../src/components/Accordion';

const mockAccordionItems = [
  {
    id: 1,
    heading: 'Item 1',
    content: 'Content 1',
    collapsed: true,
  },
  {
    id: 2,
    heading: 'Item 2',
    content: 'Content 2',
    collapsed: true,
  },
  {
    id: 3,
    heading: 'Item 3',
    content: 'Content 3',
    collapsed: true,
  },
  {
    id: 4,
    heading: 'Item 4',
    content: 'Content 4',
    collapsed: true,
  },
  {
    id: 5,
    heading: 'Item 5',
    content: 'Content 5',
    collapsed: false,
  },
];

describe('Accordion', () => {
  test('render accordion with 5 items', () => {
    render(<Accordion items={mockAccordionItems} customStyles={{}} />);
    const accordionItemElements = screen.getAllByTestId('accordion-item');
    expect(accordionItemElements.length).toBe(5);
  });

  test('expands accordion content when clicked', () => {
    render(<Accordion items={mockAccordionItems} customStyles={{}} />);
    const contentElements = screen.getAllByTestId('accordion-content');
    const toggleButtonElements = screen.getAllByRole('button');
    fireEvent.click(toggleButtonElements[0]);
    expect(contentElements[0].getAttribute('aria-expanded')).toBeTruthy();
  });

  test('collapses accordion content when clicked', () => {
    render(<Accordion items={mockAccordionItems} customStyles={{}} />);
    const contentElements = screen.getAllByTestId('accordion-content');
    const toggleButtonElements = screen.getAllByRole('button');
    fireEvent.click(toggleButtonElements[4]);
    expect(contentElements[0].getAttribute('aria-expanded')).toBe('false');
  });
});
