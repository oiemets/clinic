import { restorePasswordValidationSchema as validationSchema } from '../validationSchema';
import { FormikHelpers, FormikValues } from 'formik';

export const restorePasswordFormikConfig = {
	initialValues: {
		email: '',
	},
	validationSchema,
	onSubmit: (e: any, { resetForm }: FormikHelpers<FormikValues>) => {
		console.log(e);
		resetForm();
	},
};

export const restorePasswordFieldsConfig = {
	email: { icon: 'email', placeholder: 'Email' },
};
