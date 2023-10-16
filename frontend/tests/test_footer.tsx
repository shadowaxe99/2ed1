```tsx
import { render, screen } from '@testing-library/react';
import Footer from '../shad_ui/components/Footer';

describe('Footer', () => {
  it('renders without crashing', () => {
    render(<Footer />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });

  it('contains the correct text', () => {
    render(<Footer />);
    expect(screen.getByText('© 2022 AI Agent-powered Platform for Influencer-Brand Collaborations')).toBeInTheDocument();
  });
});
```