import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    AWS_COGNITO_REGION: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    AWS_COGNITO_POOL_ID: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
    AWS_COGNITO_APP_CLIENT_ID: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID,
},
};

export default nextConfig;
