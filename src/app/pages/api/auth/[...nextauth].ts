// pages/api/auth/[...nextauth].ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,  // Add your Google Client ID here
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,  // Add your Google Client Secret here
    }),
  ],
  session: {
    strategy: 'jwt',  // Using JWT for session
  },
  pages: {
    signIn: '/auth/signin',  // Optional: Custom sign-in page
  },
});
