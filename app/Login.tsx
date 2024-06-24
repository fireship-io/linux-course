'use client'

import { useState, useEffect } from 'react';
import { pb } from './pocketbase'

export default function GitHubLogin() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Check if the user is already logged in
    const authData = pb.authStore.model;
    if (authData) {
      setUser(authData);
    }

    // Listen for authentication changes
    pb.authStore.onChange((auth) => {
      setUser(auth ? pb.authStore.model : null);
    });
  }, []);

  const login = async () => {
    try {
      const authData = await pb.collection('users').authWithOAuth2({
        provider: 'github',
      });
      
      // Authentication successful
      console.log('Logged in:', pb.authStore.isValid);
      console.log('User Data:', pb.authStore.model);
      setUser(authData.record);
    } catch (error) {
      console.error('Authentication failed:', error);
    }
  };

  const logout = () => {
    pb.authStore.clear();
  };

  return (
    <div>
      {user ? (
        <div>
          <p className="w-full py-2 px-4 text-gray-500 text-bold">Welcome, {user.name || user.username}!</p>
          <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
 onClick={logout}>Logout</button>
          
        </div>
      ) : (
        <button className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
        onClick={login}>Login with GitHub</button>
      )}
    </div>
  );
}