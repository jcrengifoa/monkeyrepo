import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

import CancelButton from '..';

jest.mock('clsx', () => ({
  __esModule: true,
  default: jest.fn().mockImplementation((...args) => args.join(' ')),
}));

describe('Component CancelButton', () => {
  it('should render with expected content', () => {
    render(
      <CancelButton handleClick={jest.fn()}>this is the content</CancelButton>
    );
    expect(screen.getByText('this is the content')).toBeInTheDocument();
  });

  it('shold trigger onClick handler when button is clicked', () => {
    const onClickHandlerMocked = jest.fn();

    render(
      <CancelButton handleClick={onClickHandlerMocked}>
        this is the content
      </CancelButton>
    );
    fireEvent.click(screen.getByRole('button'));
    expect(onClickHandlerMocked).toHaveBeenCalledTimes(1);
  });

  it('should not be disabled when props disabled is false', () => {
    render(
      <CancelButton handleClick={jest.fn()}>this is the content</CancelButton>
    );
    expect(screen.getByRole('button')).not.toBeDisabled();
  });

  it('should be disabled when props disabled is true', () => {
    render(
      <CancelButton disabled handleClick={jest.fn()}>
        this is the content
      </CancelButton>
    );
    expect(screen.getByRole('button')).toBeDisabled();
  });
});
