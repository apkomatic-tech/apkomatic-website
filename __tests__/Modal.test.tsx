import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import Modal from '../src/components/Modal';

const MockModal = (initialProps: any = {}) => {
  const defaultProps = {
    show: true,
    showCloseBtn: false,
    onClose: jest.fn(),
    children: (
      <>
        <h1>Modal Header</h1>
        <main>
          <p>Modal Body</p>
        </main>
      </>
    ),
  };
  const props = { ...defaultProps, ...initialProps };
  return <Modal {...props} />;
};

describe('Modal', () => {
  test('render modal correctly', () => {
    render(<MockModal />);
    expect(screen.getByTestId('modal-container')).toBeInTheDocument();
  });

  test('has close button when prop is provided', () => {
    render(<MockModal showCloseBtn />);

    const closeButton = screen.getByRole('button');
    expect(closeButton).toBeInTheDocument();
  });

  test('renders correct close button text based on props', () => {
    render(<MockModal showCloseBtn closeBtnText="close modal" />);

    const closeButton = screen.getByText(/close modal/i);
    expect(closeButton).toBeInTheDocument();
  });

  test('close callback is called when provided', () => {
    const mockOnClose = jest.fn();
    render(<MockModal showCloseBtn onClose={mockOnClose} />);

    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(mockOnClose).toHaveBeenCalled();
  });
});
