```tsx
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Card } from '../../shad_ui/components/card';
import { Navbar } from '../../shad_ui/components/navbar';
import { Footer } from '../../shad_ui/components/footer';

const Analytics: NextPage = () => {
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchAnalyticsData = async () => {
      try {
        const response = await axios.get('/api/analytics');
        setAnalyticsData(response.data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchAnalyticsData();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Analytics Dashboard
        </h1>
        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {analyticsData && analyticsData.map((data, index) => (
            <Card key={index} title={data.title} content={data.content} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Analytics;
```