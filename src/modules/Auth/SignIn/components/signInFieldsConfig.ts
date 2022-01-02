import { signInValidationSchema as validationSchema } from 'modules';
import { FormikHelpers, FormikValues } from 'formik';

const initialValues = {
	userName: '',
	password: '',
};

export const signInFormikConfig = (
	onSubmit: (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => void
) => ({
	initialValues,
	validationSchema,
	onSubmit,
});

export const signInFieldsConfig = {
	userName: { icon: 'email', placeholder: 'Email' },
	password: {
		icon: 'lock',
		iconRight: 'eyeslash',
		placeholder: 'Password',
	},
};
