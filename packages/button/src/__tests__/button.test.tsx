import { render, fireEvent, screen } from '@testing-library/react';

import Button from '../Button';

test('When the button is clicked, onClick is called', async () => {
  const buttonLabel = 'Load';
  const onClick = jest.fn();
  render(<Button label={buttonLabel} onClick={onClick} />);

  fireEvent.click(screen.getByText(buttonLabel));

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('When the button is disabled and is clicked, onClick is not called', async () => {
  const buttonLabel = 'Load';
  const onClick = jest.fn();
  render(<Button label={buttonLabel} onClick={onClick} disabled />);

  fireEvent.click(screen.getByText(buttonLabel));

  expect(onClick).toHaveBeenCalledTimes(0);
});
