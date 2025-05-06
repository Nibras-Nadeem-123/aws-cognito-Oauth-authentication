"use client"
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function GoogleCallback() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const code = searchParams.get('code');
  const error = searchParams.get('error');

  useEffect(() => {
    if (code) {
      console.log('Authorization Code:', code);
      // Here you should call your backend to exchange the code for tokens
        localStorage.setItem('accessToken', code)
      // Simulate a successful sign-in after code is received
      setTimeout(() => {
        router.push('/auth/dashBoard');
      }, 1500);
    }
  }, [code, router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <div className="animate-spin h-10 w-10 rounded-full border-4 border-blue-400 border-t-transparent mx-auto mb-4" />
        <h1 className="text-xl font-semibold text-gray-800">Signing you in...</h1>
        {error && (
          <p className="mt-2 text-red-500">Error: {error}</p>
        )}
        {!code && !error && (
          <p className="mt-2 text-gray-500">Waiting for authorization code...</p>
        )}
      </div>
    </div>
  );
}
