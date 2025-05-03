/* eslint-disable @typescript-eslint/no-explicit-any */
import { Amplify } from 'aws-amplify';
import '../styles/globals.css';
import awsconfig from '../../aws/aws-export';
import { Authenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsconfig as any);

export default function App({ Component, pageProps }: any) {
    return (
        <Authenticator>
            <Component {...pageProps} />
        </Authenticator>

    );
}