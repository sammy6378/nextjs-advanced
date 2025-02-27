import * as yup from 'yup';

// email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const formSchema = yup.object().shape({
    username: yup.string().min(4, 'Username must be at least 4 characters').max(6, 'Username must be at most 6 characters').required('Username is required'),
    email: yup.string().matches(emailRegex, 'Invalid Email').required('Email is required'),
    password: yup.string().matches(passwordRegex, 'Password must include at least one number, one uppercase letter, one lowercase letter, and one special character').required('Password is required')
});