```tsx
import { render, screen } from '@testing-library/react';
import Security from '../pages/security';

describe('Security Page', () => {
  it('renders without crashing', () => {
    render(<Security />);
    expect(screen.getByTestId('security')).toBeInTheDocument();
  });

  it('displays the correct heading', () => {
    render(<Security />);
    const heading = screen.getByRole('heading', { name: /security and compliance/i });
    expect(heading).toBeInTheDocument();
  });

  it('displays the GDPR compliance section', () => {
    render(<Security />);
    const gdprSection = screen.getByText(/gdpr compliance/i);
    expect(gdprSection).toBeInTheDocument();
  });

  it('displays the data security section', () => {
    render(<Security />);
    const dataSecuritySection = screen.getByText(/data security/i);
    expect(dataSecuritySection).toBeInTheDocument();
  });
});
```