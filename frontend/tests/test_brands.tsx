```tsx
import { render, screen } from '@testing-library/react';
import Brands from '../pages/brands';

describe('Brands Page', () => {
  beforeEach(() => {
    render(<Brands />);
  });

  it('renders without crashing', () => {
    expect(screen.getByTestId('brands')).toBeInTheDocument();
  });

  it('displays a list of brands', async () => {
    const brandsList = await screen.findByTestId('brands-list');
    expect(brandsList).toBeInTheDocument();
  });

  it('displays a search bar', () => {
    const searchBar = screen.getByPlaceholderText('Search brands...');
    expect(searchBar).toBeInTheDocument();
  });

  it('displays a brand details section when a brand is clicked', async () => {
    const brandItem = await screen.findByTestId('brand-item');
    brandItem.click();

    const brandDetails = await screen.findByTestId('brand-details');
    expect(brandDetails).toBeInTheDocument();
  });
});
```