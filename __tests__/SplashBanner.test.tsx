import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import SplashBanner from '../src/components/SplashBanner';

describe('Splash Banner', () => {
  test('renders heading', () => {
    render(<SplashBanner title="Hello world" />);
    const element = screen.getByRole('heading');
    expect(element).toBeInTheDocument();
  });

  test('shows correct title based on prop', () => {
    render(<SplashBanner title="My Banner" />);
    const element = screen.getByText(/my banner/i);
    expect(element).toBeInTheDocument();
  });
  test('shows correct message based on prop', () => {
    render(<SplashBanner title="My Banner" message="Hello world" />);
    const element = screen.getByText(/hello world/i);
    expect(element).toBeInTheDocument();
  });
  test('renders childen', () => {
    render(
      <SplashBanner title="My Banner">
        <div data-testid="child">Child</div>
      </SplashBanner>
    );
    const element = screen.getByTestId('child');
    expect(element).toBeInTheDocument();
  });
});
