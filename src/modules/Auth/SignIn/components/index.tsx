import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';
import { useFormikTextFields } from 'hooks';
import { signInFormikConfig, signInFieldsConfig } from './signInFieldsConfig';
import { FormikHelpers, FormikValues } from 'formik';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../redux/signInSlice';

export const SignIn = () => {
	const dispatch = useDispatch();

	const onSubmit = (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => {
		dispatch(signInRequest(values));
		resetForm();
	};

	const [data, handleSubmit] = useFormikTextFields(
		signInFormikConfig(onSubmit),
		signInFieldsConfig
	);

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<Title>sign in</Title>
				{data.map(props => (
					<FormTextField {...props} />
				))}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Sign In
				</Button>
				<StyledLink to='/restorepassword'>Forgot Password?</StyledLink>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Don't have an account?
				<StyledLink to='/signup'>Sign up</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
