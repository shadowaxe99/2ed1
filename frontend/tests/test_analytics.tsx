```tsx
import { render, screen } from '@testing-library/react';
import Analytics from '../pages/analytics';

describe('Analytics Page', () => {
  it('renders without crashing', () => {
    render(<Analytics />);
    expect(screen.getByTestId('analytics')).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    render(<Analytics />);
    const heading = screen.getByRole('heading', { name: /analytics dashboard/i });
    expect(heading).toBeInTheDocument();
  });

  // Add more tests as needed for your analytics page
});
```