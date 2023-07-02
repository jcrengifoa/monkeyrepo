import { render, screen } from '@testing-library/react';

import BasePackage from '../BasePackage';

test('loads items eventually', async () => {
  const basePackageText = 'Test basePackage Text';
  render(<BasePackage text={basePackageText} />);

  screen.getByText(basePackageText);
});
