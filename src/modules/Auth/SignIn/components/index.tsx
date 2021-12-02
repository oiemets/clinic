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
import { FormikValues } from 'formik';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../redux/signInSlice';
import { SIGN_UP, RESTORE_PASSWORD } from 'routes';

export const SignIn = () => {
	const dispatch = useDispatch();

	const onSubmit = (values: FormikValues) => {
		dispatch(signInRequest(values));
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
				<StyledLink to={'/' + RESTORE_PASSWORD}>Forgot Password?</StyledLink>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Don't have an account?
				<StyledLink to={'/' + SIGN_UP}>Sign up</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
