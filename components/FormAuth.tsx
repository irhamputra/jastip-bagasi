import { useFormik } from 'formik';
import React from 'react';
import useValidation from '../hooks/useValidation';

const FormAuth: React.FC<{ type: 'login' | 'register' }> = ({ type }) => {
  const initialValues = {
    email: '',
    ...(type === 'register' ? { password: '' } : {}),
  };

  const { handleChange, handleSubmit, values } = useFormik({
    initialValues,
    validationSchema: useValidation(initialValues),
    onSubmit: (values) => console.log(values),
  });

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="email" value={values.email} onChange={handleChange} />
      {type === 'login' && <input type="text" name="password" value={values.password} onChange={handleChange} />}

      <button type="submit">Login</button>
    </form>
  );
};

export default FormAuth;
