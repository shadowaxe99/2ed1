```tsx
import { useState, useEffect } from 'react';
import { Button, Card } from '../../shad_ui/components';
import styles from '../../tailwindcss/styles.css';

const PitchDeck = () => {
  const [pitchDeck, setPitchDeck] = useState([]);

  useEffect(() => {
    // Fetch pitch deck data from the server
    fetch('/api/pitch_deck')
      .then(response => response.json())
      .then(data => setPitchDeck(data));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pitch Deck Generator</h1>
      <div className={styles.grid}>
        {pitchDeck.map((deck, index) => (
          <Card key={index} className={styles.card}>
            <h3>{deck.title}</h3>
            <p>{deck.description}</p>
            <Button href={deck.link}>View Pitch Deck</Button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default PitchDeck;
```