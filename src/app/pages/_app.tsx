/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify } from 'aws-amplify';
import '../styles/globals.css';
import awsconfig from '../../../awsconfig';

Amplify.configure(awsconfig as any);

export default function App({ Component, pageProps }: any) {
  return <Component {...pageProps} />;
}