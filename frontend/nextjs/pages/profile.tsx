```tsx
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { Card } from '../../shad_ui/components/card';
import { Button } from '../../shad_ui/components/button';

const Profile = () => {
  const router = useRouter();
  const [userProfile, setUserProfile] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const response = await axios.get('/api/userProfile');
        setUserProfile(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user profile:', error);
        setLoading(false);
      }
    };

    fetchUserProfile();
  }, []);

  const handleEditProfile = () => {
    router.push('/editProfile');
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!userProfile) {
    return <div>No user profile found.</div>;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-2xl font-bold mb-4">User Profile</h1>
      <Card>
        <h2 className="text-xl font-bold">{userProfile.name}</h2>
        <p>{userProfile.bio}</p>
        <p>{userProfile.email}</p>
        <Button onClick={handleEditProfile}>Edit Profile</Button>
      </Card>
    </div>
  );
};

export default Profile;
```