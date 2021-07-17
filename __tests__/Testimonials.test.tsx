import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Testimonials from '../src/components/Testimonials';

describe('Testimonials test', () => {
  const mockTestimonialsData = [
    {
      author: 'John Doe',
      company: 'ABC',
      content: 'test111',
      _id: '111',
    },
    {
      author: 'Jerry Done',
      company: 'XYZ',
      content: 'test112',
      _id: '112',
    },
    {
      author: 'Jane Doe',
      content: 'test113',
      _id: '113',
    },
  ];

  test('renders swiper container', () => {
    render(<Testimonials items={mockTestimonialsData} />);
    const swiperContainerElement = screen.getByTestId('swiper-container');
    expect(swiperContainerElement).toBeInTheDocument();
  });

  test('renders swiper pagination', () => {
    render(<Testimonials items={mockTestimonialsData} />);
    const swiperPaginationElement = screen.getByTestId('swiper-pagination');
    expect(swiperPaginationElement).toBeInTheDocument();
  });
  test('renders swiper arrows', () => {
    render(<Testimonials items={mockTestimonialsData} />);
    const swiperArrowEl = screen.getAllByTestId('swiper-arrow');
    expect(swiperArrowEl.length).toBe(2);
  });
});
