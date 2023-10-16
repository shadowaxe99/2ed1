```tsx
import { render, screen } from '@testing-library/react';
import Index from '../pages/index';

describe('Home Page', () => {
  it('renders without crashing', () => {
    render(<Index />);
    expect(screen.getByText('Welcome to AI Agent-powered Platform for Influencer-Brand Collaborations')).toBeInTheDocument();
  });
});
```