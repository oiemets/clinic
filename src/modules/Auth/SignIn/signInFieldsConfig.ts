import { signInValidationSchema as validationSchema } from '../validationSchema';
import { FormikHelpers, FormikValues } from 'formik';

export const signInFormikConfig = {
	initialValues: {
		email: '',
		password: '',
	},
	validationSchema,
	onSubmit: (e: any, { resetForm }: FormikHelpers<FormikValues>) => {
		console.log(e);
		resetForm();
	},
};

export const signInFieldsConfig = {
	email: { icon: 'email', placeholder: 'Email' },
	password: {
		icon: 'lock',
		iconRight: 'eyeslash',
		placeholder: 'Password',
	},
};
