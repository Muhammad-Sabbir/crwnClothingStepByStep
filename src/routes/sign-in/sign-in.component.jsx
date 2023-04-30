// // example 01: Hooks API Reference
// import { useEffect } from 'react';
// import { getRedirectResult } from 'firebase/auth';
// // example 01: Hooks API Reference

import {
  // // example 01: Hooks API Reference
  // auth,
  // signInWithGoogleRedirect,
  // // example 01: Hooks API Reference
  signInWithGooglePopup,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

import SignUpForm from '../../components/sign-up-form/sign-up-form.component';

// // //example 01: Hooks API Reference
// const imperativeFunction = async () => {
//   const response = await getRedirectResult(auth);
//   console.log(response);
//   if (response) {
//     const userDocRef = await createUserDocumentFromAuth(response.user);
//   }
// };
// // //example 01: Hooks API Reference

const SignIn = () => {
  // //example 01: Hooks API Reference
  // useEffect(() => {
  //   imperativeFunction(); // https://medium.com/geekculture/react-uncaught-typeerror-destroy-is-not-a-function-192738a6e79b
  // }, []);
  //  //example 01: Hooks API Reference

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocumentFromAuth(user);
  };

  // here we do not use this method, because when we click the ridrect button this will bring us into new google authentication page and then redirect it back to this page again, and when we getback this page again then react will rerender this page initially and thats why our variables data will not store anything from authentication page. That's why we need to use another process. We need to import useEffect, getRiderectResult method and auth method to overcome this problem.
  // const logGoogleRederectUser = async () => {
  //   const { user } = await signInWithGoogleRedirect();
  //   console.log({ user });
  // };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      {/*Example01: Hooks API Reference */}
      {/* <button onClick={signInWithGoogleRedirect}>Sign in with Google Redirect</button> */}
      {/*Example01: Hooks API Reference */}
      <SignUpForm />
    </div>
  );
};

export default SignIn;
