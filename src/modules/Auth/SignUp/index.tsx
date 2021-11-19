import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField, FormTextFieldProps } from 'components';
import { useFormik } from 'formik';
import { validationSchema } from './signUpValidationScheme';

export const SignUp = () => {
	const formik = useFormik({
		initialValues: {
			firstName: '',
			lastName: '',
			email: '',
			password: '',
			confirmPassword: '',
		},
		validationSchema,
		onSubmit: (values, { resetForm }) => {
			console.log(values);
			resetForm();
		},
	});

	const formFields = Object.keys(formik.initialValues) as Array<
		keyof typeof formik.initialValues
	>;

	const formFieldsProps: {
		[Key in keyof typeof formik.initialValues]: FormTextFieldProps;
	} = {
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

	const data = formFields.map((v, i) => {
		return (
			<FormTextField
				key={v + '-' + i}
				{...formFieldsProps[v]}
				{...formik.getFieldProps(`${v}`)}
				errorMessage={
					formik.touched[v] && formik.errors[v] ? formik.errors[v] : null
				}
				borderColor={formik.touched[v] && formik.errors[v] ? 'lightRed' : null}
			/>
		);
	});

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={formik.handleSubmit}>
				<Title>sign up</Title>
				{data}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Sign Up
				</Button>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Already have an account?
				<StyledLink to='/signin'>Sign in</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
