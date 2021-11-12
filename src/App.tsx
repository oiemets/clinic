import { Switch, Route } from 'react-router-dom';
import {
	SignUpPage,
	SignInPage,
	ResetPasswordPage,
	NotFoundPage,
} from './pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadingStart } from './modules';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyles } from './styles';
import { RestorePasswordPage } from 'pages/Auth/RestorePassword';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(loadingStart());
	}, [dispatch]);

	const patients = useSelector(state => state);

	console.log(patients);

	return (
		<ThemeProvider theme={theme}>
			<GlobalStyles />
			<Switch>
				<Route path='/' exact component={SignUpPage} />
				<Route path='/signin' component={SignInPage} />
				<Route path='/restorepassword' component={RestorePasswordPage} />
				<Route path='/resetpassword' component={ResetPasswordPage} />
				<Route component={NotFoundPage} />
			</Switch>
		</ThemeProvider>
	);
};
