import { validationSchema } from './signUpValidationScheme';
import { FormikHelpers, FormikValues } from 'formik';

export const formikConfig = {
	initialValues: {
		firstName: '',
		lastName: '',
		email: '',
		password: '',
		confirmPassword: '',
	},
	validationSchema,
	onSubmit: (e: any, { resetForm }: FormikHelpers<FormikValues>) => {
		console.log(e);
		resetForm();
	},
};

export const signUpFieldsConfig = {
	firstName: { icon: 'user', placeholder: 'First Name' },
	lastName: { icon: 'user', placeholder: 'Last Name' },
	email: { icon: 'email', placeholder: 'Email' },
	password: {
		icon: 'lock',
		iconRight: 'eyeslash',
		placeholder: 'Password',
	},
	confirmPassword: {
		icon: 'check',
		placeholder: 'Confirm Password',
		iconRight: 'eyeslash',
	},
};
