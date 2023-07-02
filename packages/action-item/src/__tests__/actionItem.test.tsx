import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { ActionItem } from '../ActionItem';

describe('Component ActionItem', () => {
  const MockIcon = () => <div>mockIcon</div>;
  const onClickMock = jest.fn();

  it('should render Icon correct', () => {
    render(<ActionItem onClick={onClickMock} Icon={MockIcon} />);
    expect(screen.getByText(/icon/i)).toBeInTheDocument();
  });

  it('should call onClick handler when click on button', () => {
    render(<ActionItem onClick={onClickMock} Icon={MockIcon} />);
    fireEvent.click(screen.getByText(/icon/i));
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should show tooltip when mouse is over with correct text', async () => {
    render(
      <ActionItem
        title='mockToolTipTitle'
        onClick={onClickMock}
        Icon={MockIcon}
      />
    );
    expect(screen.queryAllByText('mockToolTipTitle')).toHaveLength(0);
    const icon = screen.getByText(/icon/i);

    act(() => {
      fireEvent(icon, new MouseEvent('mouseover', { bubbles: true }));
    });
    expect(await screen.findByText('mockToolTipTitle')).toBeInTheDocument();
  });
});
