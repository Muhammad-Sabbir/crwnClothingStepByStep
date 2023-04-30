import './form-input.styles.scss';

// // exampl 01:
// const FormInput = ({ label, changeHandler, value }) => {
//   return (
//     <div>
//       <label htmlFor='name'>{label}</label>
//       <input type='text' required onChange={changeHandler} name='displayName' value={value} />
//     </div>
//   );
// };

// // exampl 02: this example is refer to sign-up-form.component.jsx files example
// const FormInput = ({ label, inputOptions }) => {
//   return (
//     <div className='group'>
//       <input className='form-input' {...inputOptions} />
//       {label && (
//         <label className={`${inputOptions.value.length ? 'shrink' : ''}form-input-label`}>
//           {label}
//         </label>
//       )}
//     </div>
//   );
// };

// // exampl 03:
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className='group'>
      <input className='form-input' {...otherProps} />
      {label && (
        <label className={`${otherProps.value.length ? 'shrink' : ''}form-input-label`}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
