'use client'

import { useFormik } from 'formik';
import { formSchema } from '@/components/schemas/formSchema';

interface FormValues {
  email: string;
  password: string;
}

const onSubmit = (values: FormValues) => {
  console.log('Form Submitted', values);
};

function Login() {
  const { values, handleBlur, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <>
      <h2 className="text-3xl font-bold text-purple-900 mb-4">Sign In</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Email Field */}
        <div>
          <label htmlFor="email" className="input-label">Email</label>
          <input
            type="email"
            value={values.email}
            onChange={handleChange}
            id="email"
            onBlur={handleBlur}
            placeholder="Enter your email"
            className={`input-container ${errors.email && touched.email ? 'input-error' : ''}`}
          />
          {errors.email && touched.email && <div className="error-message">{errors.email}</div>}
        </div>

        {/* Password Field */}
        <div>
          <label htmlFor="password" className="input-label">Password</label>
          <input
            type="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            onBlur={handleBlur}
            placeholder="Enter your password"
            className={`input-container ${errors.password && touched.password ? 'input-error' : ''}`}
          />
          {errors.password && touched.password && <div className="error-message">{errors.password}</div>}
        </div>

        <button type="submit" className="submit-button">Sign In</button>
      </form>
    </>
  );
}

export default Login;
