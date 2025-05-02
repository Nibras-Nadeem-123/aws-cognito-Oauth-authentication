'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { getCurrentUser } from 'aws-amplify/auth';

const Page: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getCurrentUser()
      .then((currentUser) => {
        setUser(currentUser);
        setLoading(false);
      })
      .catch(() => {
        window.location.href = '/signin';
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className='h-[500px]'>
      <div className='h-100 bg-gray-100 w-[620px] mx-auto flex flex-col justify-center items-center mt-10 shadow-md p-10'>
        <h1 className='text-[50px] font-bold'>Welcome {user?.username}</h1>
        <p className='text-[20px]'>Your one-stop shop for all your needs</p>
        <p className='text-[20px]'>Explore our wide range of products and enjoy shopping!</p>
        <button className='mt-5 bg-gray-800 text-white py-3 px-5 hover:shadow shadow-white rounded-md cursor-pointer hover:bg-gray-700 hover:scale-105 duration-500'>
          <Link href="/auth/product">Shop Now</Link>
        </button>
      </div>
    </div>
  );
};

export default Page;
