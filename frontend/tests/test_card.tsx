```tsx
import { render, screen } from '@testing-library/react';
import Card from '../shad_ui/components/Card';

describe('Card Component', () => {
  it('renders correctly', () => {
    render(<Card title="Test Card" description="This is a test card." />);

    const cardTitle = screen.getByText(/Test Card/i);
    const cardDescription = screen.getByText(/This is a test card./i);

    expect(cardTitle).toBeInTheDocument();
    expect(cardDescription).toBeInTheDocument();
  });
});
```