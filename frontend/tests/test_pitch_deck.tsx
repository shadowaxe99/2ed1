```tsx
import { render, screen } from '@testing-library/react';
import PitchDeck from '../pages/pitch_deck';

describe('Pitch Deck Page', () => {
  it('renders without crashing', () => {
    render(<PitchDeck />);
    expect(screen.getByTestId('pitch_deck')).toBeInTheDocument();
  });

  it('displays the pitch deck generator', () => {
    render(<PitchDeck />);
    expect(screen.getByText('Pitch Deck Generator')).toBeInTheDocument();
  });

  // Add more tests as needed for the Pitch Deck page
});
```