```tsx
import React, { useEffect, useState } from 'react';
import { Button, Card } from '../../shad_ui/components';
import styles from '../../tailwindcss/styles.css';

const Partnerships = () => {
  const [partnerships, setPartnerships] = useState([]);

  useEffect(() => {
    // Fetch partnerships from the backend
    fetch('/api/partnerships')
      .then(response => response.json())
      .then(data => setPartnerships(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Partnerships</h1>
      <div className={styles.partnerships}>
        {partnerships.map((partnership, index) => (
          <Card key={index}>
            <h2>{partnership.brandName}</h2>
            <p>{partnership.idea}</p>
            <Button onClick={() => window.location.href = `/partnerships/${partnership.id}`}>
              View Details
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Partnerships;
```