'use client'

import { useFormik } from 'formik';
import { formSchema } from '@/components/schemas/formSchema';
import { useRouter } from 'next/navigation';
import {toast} from 'sonner'
import { useAuthRegisterMutation } from '@/components/services/authService';
import '../../globals.css';

interface FormValues {
  username: string;
  email: string;
  password: string;
}


function Register() {

  const router = useRouter();

  const [registerUser] = useAuthRegisterMutation();

  const onSubmit =async (values: FormValues) => {
    try {
      await registerUser(values).unwrap();
      toast.success('Registration successful!');
      router.push('/auth/login');  
    } catch (error) {
      console.error("Registration failed",error);
    }
  };



  const { values, handleBlur, errors, touched, handleChange, handleSubmit } = useFormik({
    initialValues: { username: '', email: '', password: ''},
    validationSchema: formSchema,
    onSubmit,
  });

  return (
    <>
      <h2 className="text-3xl font-bold text-purple-900 mb-4">Sign Up</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        {/* Username Field */}
        <div>
          <label htmlFor="username" className="input-label">Username</label>
          <input
            type="text"
            value={values.username}
            onChange={handleChange}
            id="username"
            onBlur={handleBlur}
            placeholder="Enter your username"
            className={`input-container ${errors.username && touched.username ? 'input-error' : ''}`}
          />
          {errors.username && touched.username && <div className="error-message">{errors.username}</div>}
        </div>

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
        <button type="submit" className="submit-button">Sign Up</button>
      </form>
    </>
  );
}

export default Register;
