import * as Yup from 'yup';

export const validationSchema = Yup.object({
	firstName: Yup.string()
		.max(15, 'Must be 15 characters or less')
		.required('Required'),
	lastName: Yup.string()
		.max(20, 'Must be 20 characters or less')
		.required('Required'),
	email: Yup.string().email('Invalid email address').required('Required'),
	password: Yup.string()
		.required('Password should not be empty')
		.min(10, 'Password should be at least 10 characters.'),
	confirmPassword: Yup.string()
		.required('Password should not be empty')
		.min(10, 'Password should be at least 10 characters.')
		.oneOf([Yup.ref('password')], 'Passwords do not match.'),
});
