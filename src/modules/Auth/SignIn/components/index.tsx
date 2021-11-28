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
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const onSubmit = (
		values: FormikValues,
		{ resetForm }: FormikHelpers<FormikValues>
	) => {
		dispatch(signInRequest(values));
		resetForm();
		navigate('/');
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
				<StyledLink to='/'>Sign up</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
