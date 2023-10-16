import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { Navbar } from '../../shad_ui/components/navbar';
import { Footer } from '../../shad_ui/components/footer';

const Security: NextPage = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // TODO: Implement Firebase Auth to fetch the current user
    // setUser(firebase.auth().currentUser);
  }, []);

  return (
    <div>
      <Navbar />
      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to the Security Page
        </h1>

        <p className="mt-3 text-2xl">
          User: {user ? user.email : 'Not logged in'}
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          {/* TODO: Implement security features */}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Security;