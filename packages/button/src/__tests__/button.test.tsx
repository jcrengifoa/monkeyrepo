import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import Button from '../Button';

test('loads items eventually', async () => {
  const buttonLabel = 'Load';
  const onClick = jest.fn();
  render(<Button label={buttonLabel} onClick={onClick} />);

  fireEvent.click(screen.getByText(buttonLabel));

  expect(onClick).toHaveBeenCalledTimes(1);
});
