import {
    signUp as amplifySignUp,
    confirmSignUp as amplifyConfirmSignUp,
    signIn as amplifySignIn,
    signOut as amplifySignOut,
  } from '@aws-amplify/auth'
  
  // SIGN UP
  export const signUp = async (email: string, password: string) => {
    try {
      const user = await amplifySignUp({
        username: email,
        password,
        options: {
          userAttributes: {
            email,
          },
          autoSignIn: {
            enabled: true,
          },
        },
      });
      return user;
    } catch (error) {
      console.error('Sign up error:', error);
      throw error;
    }
  };
  
  // CONFIRM SIGNUP
  export const confirmSignUp = async (email: string, code: string) => {
    try {
      await amplifyConfirmSignUp({ username: email, confirmationCode: code });
    } catch (error) {
      console.error('Confirm sign up error:', error);
      throw error;
    }
  };
  
  // SIGN IN
  export const signIn = async (email: string, password: string) => {
    try {
      const user = await amplifySignIn({ username: email, password });
      return user;
    } catch (error) {
      console.error('Sign in error:', error);
      throw error;
    }
  };
  
  // SIGN OUT
  export const signOut = async () => {
    try {
      await amplifySignOut();
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };
  