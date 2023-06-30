import { render, screen } from '@testing-library/react';

import Package from '../Package';

test('loads items eventually', async () => {
  const packageText = 'Test Package Text';
  render(<Package text={packageText} />);

  screen.getByText('Test Package Text');
});
