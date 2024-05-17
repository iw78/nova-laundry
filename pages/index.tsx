

import React from 'react';
import { useRouter } from 'next/router';

const HomePage: React.FC = () => {
  const router = useRouter();

  const navigateTo = (path: string) => {
    router.push(path);
  };
   
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <h1 className="text-3xl font-bold mb-6">Welcome to Nova Laundry</h1>
        <button
          onClick={() => navigateTo('/auth/pages/login')}
          className="bg-orange-500 text-white py-2 px-4 rounded w-full mb-4"
        >
          Login
        </button>
        <button
          onClick={() => navigateTo('/auth/pages/register')}
          className="bg-blue-500 text-white py-2 px-4 rounded w-full"
        >
          Register
        </button>
      </div>
    </div>
  );
};

export default HomePage;
