import { render, screen } from '@testing-library/react';

import Card from '../Card';

test('loads items eventually', async () => {
  const cardTitle = 'Welcome';
  render(<Card title={cardTitle} />);

  screen.getByText(cardTitle);
  screen.getByText('Alert Everybody!');
});
