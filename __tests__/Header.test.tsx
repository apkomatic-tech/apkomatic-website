import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Header from '../src/components/Header';

expect.extend(toHaveNoViolations);

describe('Header - Desktop', () => {
  test('Header renders correctly', () => {
    render(<Header siteTitle="My Site" />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });
  test('Header contains site brand', () => {
    render(<Header siteTitle="My Site" />);
    expect(screen.getByText(/my site/i)).toBeInTheDocument();
  });
  test('Header contains navigation', () => {
    render(<Header siteTitle="My Site" />);
    expect(screen.getByTestId('desktop-navigation')).toBeInTheDocument();
  });
  test('Header accessibility', async () => {
    const { container } = render(<Header siteTitle="my site" />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

describe('Header - Mobile', () => {
  test('Hamburger menu is not shown initially', () => {
    render(<Header siteTitle="My Site" />);
    expect(screen.queryByTestId('mobile-navigation')).not.toBeInTheDocument();
  });
  test('Hamburger menu contains site brand', async () => {
    render(<Header siteTitle="My Site" />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);
    const siteBrand = await screen.findByTestId('mobile-navigation-sitebrand');
    expect(siteBrand.textContent).toBe('My Site');
  });
  test('Hamburger menu shows when hamburger button is clicked', () => {
    render(<Header siteTitle="My Site" />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);
    expect(screen.queryByTestId('mobile-navigation')).toBeInTheDocument();
  });
  test('Hamburger menu is hidden when close button is clicked', async () => {
    render(<Header siteTitle="My Site" />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);
    const closeHamburgerMenuButton = await screen.findByTestId(
      'close-hamburger-menu'
    );
    fireEvent.click(closeHamburgerMenuButton);
    expect(screen.queryByTestId('mobile-navigation')).not.toBeInTheDocument();
  });
  test('Header accessibility', async () => {
    const { container } = render(<Header siteTitle="My Site" />);
    const hamburgerButton = screen.getByTestId('hamburger-button');
    fireEvent.click(hamburgerButton);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
