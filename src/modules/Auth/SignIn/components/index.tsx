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
import { signOutRequest } from '../../AuthProvider';

import { useNavigate, useLocation } from 'react-router-dom';
import { readyToRedirect } from '../redux';
import { useTypedSelector } from 'hooks';
import { useEffect } from 'react';

export const SignIn = () => {
	const dispatch = useDispatch();

	const redirect = useTypedSelector(readyToRedirect);
	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (redirect) {
			navigate('/appointments');
		}
	}, [redirect, navigate, location]);

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

	const signOut = () => {
		dispatch(signOutRequest());
	};

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
				<Button onClick={signOut} iconRight='arrowRight' iconRightColor='white'>
					Sign Out
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
