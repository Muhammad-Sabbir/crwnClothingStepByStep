import { useState } from 'react';

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

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={handleSubmit}>
        <label htmlFor='name'>Display Name</label>
        <input
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          value={displayName}
        />
        <label htmlFor='name'>Email</label>
        <input type='email' required onChange={handleChange} name='email' value={email} />
        <label htmlFor='name'>Password</label>
        <input type='password' required onChange={handleChange} name='password' value={password} />
        <label htmlFor='name'>Confirm Password</label>
        <input
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
