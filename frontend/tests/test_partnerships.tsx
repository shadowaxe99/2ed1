```tsx
import { render, screen } from '@testing-library/react';
import Partnerships from '../pages/partnerships';

describe('Partnerships Page', () => {
  beforeEach(() => {
    render(<Partnerships />);
  });

  test('renders Partnerships page', () => {
    const partnershipsElement = screen.getByTestId('partnerships');
    expect(partnershipsElement).toBeInTheDocument();
  });

  test('displays correct title', () => {
    const titleElement = screen.getByText(/Partnerships/i);
    expect(titleElement).toBeInTheDocument();
  });

  test('displays partnership ideas', () => {
    const ideasElement = screen.getByTestId('partnership-ideas');
    expect(ideasElement).toBeInTheDocument();
  });

  test('displays match button', () => {
    const matchButtonElement = screen.getByTestId('match-button');
    expect(matchButtonElement).toBeInTheDocument();
  });
});
```