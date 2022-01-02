import { signUpValidationSchema as validationSchema } from '../validationSchema';
import { FormikHelpers, FormikValues } from 'formik';

const initialValues = {
	firstName: '',
	lastName: '',
	userName: '',
	password: '',
	confirmPassword: '',
};

export const signUpFormikConfig = (
	onSubmit: (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => void
) => ({
	initialValues,
	validationSchema,
	onSubmit,
});

export const signUpFieldsConfig = {
	firstName: { icon: 'user', placeholder: 'First Name' },
	lastName: { icon: 'user', placeholder: 'Last Name' },
	userName: { icon: 'email', placeholder: 'Email' },
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
