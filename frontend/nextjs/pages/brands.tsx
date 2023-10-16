```tsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../shad_ui/components/card';

const Brands = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrands = async () => {
      const response = await axios.get('/api/brands');
      setBrands(response.data);
    };

    fetchBrands();
  }, []);

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-semibold text-center my-8">Brands</h1>
      <div className="grid grid-cols-3 gap-4">
        {brands.map((brand) => (
          <Card key={brand.id} title={brand.name} description={brand.description} />
        ))}
      </div>
    </div>
  );
};

export default Brands;
```