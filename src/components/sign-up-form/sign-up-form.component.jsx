import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import {
  createAuthUserWithEmailAndPassword,
  createUserDocumentFromAuth,
} from '../../utils/firebase/firebase.utils';

const defaultFormFields = {
  displayName: '',
  email: '',
  password: '',
  confirmPassword: '',
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    // 1. Confirm password matches.
    if (password !== confirmPassword) {
      alert('Password donot match');
      return;
    }

    // 2. We need to then actually see if we've authenticated that user with email and password.

    // 3. we want to create a user document.
    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      // note: here displayName will not come from user Object, this will come from auth or google server
      //   console.log(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetFormFields();
    } catch (error) {
      if (error.code == 'auth/email-already-in-use') {
        alert('Cannot create user, Email already in use');
      } else {
        console.log('user creating encounterd an error: ', error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  //   return (
  //     <div>
  //       <h1>Sign up with your email and password</h1>
  //       <form action='' onSubmit={handleSubmit}>
  //         {/* Another example to create input element. */}

  //         <FormInput
  //           label='Display Name'
  //           inputOptions={{
  //             type: 'text',
  //             required: true,
  //             onChange: handleChange,
  //             name: 'Display Name',
  //             value: displayName,
  //           }}
  //         />

  //         {/* now commentout the return of below go to the form-input.component.jsx file and change there. example 02 */}
  //         <button type='submit onSubmit={()=>{}}'>Sign Up</button>
  //       </form>
  //     </div>
  //   );

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={handleSubmit}>
        <FormInput
          label='Display Name'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />

        <FormInput
          label='Email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          value={email}
        />

        <FormInput
          label='Password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
        />

        <FormInput
          label='Confirm Password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
        />
        <button type='submit onSubmit={()=>{}}'>Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
