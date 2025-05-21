const awsconfig = {
    Auth: {
      region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
      userPoolId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_ID,
      userPoolWebClientId: process.env.NEXT_PUBLIC_AWS_COGNITO_USER_POOL_CLIENT_ID,
      oauth: {
        domain: process.env.NEXT_PUBLIC_AWS_COGNITO_OAUTH_DOMAIN,
        scope: ['email', 'openid'],
        redirectSignIn: process.env.NEXT_PUBLIC_AWS_COGNITO_REDIRECT_SIGNIN,
        redirectSignOut: process.env.NEXT_PUBLIC_AWS_COGNITO_REDIRECT_SIGNOUT,
        responseType: 'code',
      },
    },
  };
  
  export default awsconfig;
  