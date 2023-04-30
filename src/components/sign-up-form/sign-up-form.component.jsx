import { useState } from 'react';

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
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
      <form action='' onSubmit={() => {}}>
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
