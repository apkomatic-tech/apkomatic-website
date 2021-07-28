import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import CharacterCount from '../src/components/contact/CharacterCount';

describe('Character count', () => {
  test('renders correct threshold', () => {
    render(<CharacterCount count={0} threshold={255} />);
    const thresholdElement = screen.getByTestId('threshold');
    expect(thresholdElement.textContent).toBe('255');
  });
  test('renders correct characters allowed count', () => {
    render(<CharacterCount count={50} threshold={255} />);
    const allowedCharElement = screen.getByTestId('characters-allowed');
    expect(allowedCharElement.textContent).toBe('205');
  });
  test('change color attribute when char exceeded', () => {
    render(<CharacterCount count={500} threshold={255} />);
    const wrapper = screen.getByTestId('character-count');
    expect(wrapper.style.color).toBe('rgb(185, 0, 62)');
  });
});
