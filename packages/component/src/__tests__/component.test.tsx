import { render, screen } from '@testing-library/react';

import Component from '../Component';

test('loads items eventually', async () => {
  const componentText = 'Test Component Text';
  render(<Component text={componentText} />);

  screen.getByText('Test Component Text');
});
