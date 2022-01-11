import {
	FormTextFieldsWrapper,
	Title,
	AuthFormWrapper,
	StyledLink,
	AuthFooterWrapper,
} from 'elements';
import { Button, FormTextField } from 'components';
import { useFormikTextFields } from 'hooks';
import { signUpFormikConfig, signUpFieldsConfig } from './signUpFieldsConfig';
import { SIGN_IN } from 'routes';
import { FormikValues } from 'formik';

export const SignUp = () => {
	const onSubmit = (values: FormikValues) => {
		console.log(values);
	};

	const [data, handleSubmit] = useFormikTextFields(
		signUpFormikConfig(onSubmit),
		signUpFieldsConfig
	);

	return (
		<AuthFormWrapper>
			<FormTextFieldsWrapper onSubmit={handleSubmit}>
				<Title>sign up</Title>
				{data.map(props => (
					<FormTextField {...props} />
				))}
				<Button iconRight='arrowRight' iconRightColor='white' type='submit'>
					Sign Up
				</Button>
			</FormTextFieldsWrapper>
			<AuthFooterWrapper>
				Already have an account?
				<StyledLink to={'/' + SIGN_IN}>Sign in</StyledLink>
			</AuthFooterWrapper>
		</AuthFormWrapper>
	);
};
