'use client'

import { useState, useEffect } from 'react';
import PocketBase from 'pocketbase';
import { faker } from '@faker-js/faker';

import { pb } from './pocketbase'

export default function GuestbookSigner() {
  const [user, setUser] = useState<any>(null);
//   const [lastMessage, setLastMessage] = useState('');
  const [signatures, setSignatures] = useState<any[]>([]);

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

    // Fetch last 100 signatures
    fetchSignatures();
  }, []);

  const fetchSignatures = async () => {
        try {
        const resultList = await pb.collection('users').getList(1, 100, {
            sort: '-created',
            // expand: 'user',
        });
        setSignatures(resultList.items);
        } catch (error) {
        console.error('Failed to fetch signatures:', error);
        }
    };

  const signGuestbook = async () => {
    if (!user) {
      alert('Please log in to sign the guestbook.');
      return;
    }

    const message = faker.hacker.phrase();

    try {
      // const record = await pb.collection('signatures').create({
      //   // user: user.id,
      //   user: user.id,
      //   message: message,
      // });
      const record = await pb.collection('users').update(user.id, {
        message: message,
        signed: new Date()
      });
      console.log('Guestbook signed:', record);
    //   setLastMessage(message);
    fetchSignatures();
    } catch (error) {
      alert('unable to sign guestbook, did you already sign it?')
      console.error('Failed to sign guestbook:', error);
    }
  };

  return (
    <div>
      {user && 
      <button className="w-full py-2 px-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75" onClick={signGuestbook} disabled={!user}>
        Sign the Guestbook
      </button>}
    <h2 className="text-xl font-semibold text-center text-gray-900">Last 100 Signatures</h2>
    <ul className="mt-4 space-y-2 max-h-60 overflow-y-auto">
  {signatures.map((signature) => (
    <li key={signature.id} className="text-sm text-gray-600">
      <span className="font-semibold">{signature.expand?.user?.username || 'Anonymous'}</span>: 
      "{signature.message}" 
      <span className="text-xs text-gray-400"> - {new Date(signature.created).toLocaleString()}</span>
    </li>
  ))}
</ul>
    </div>
  );
}
