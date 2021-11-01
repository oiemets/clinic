import { Switch, Route } from 'react-router-dom';
import { SignUp, SignIn } from './pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { patientsLoadStart } from './state/';
import { AppState } from './state/types';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(patientsLoadStart());
	}, [dispatch]);

	const patients = useSelector((state: AppState) => state.patients);

	console.log(patients);

	return (
		<>
			<Switch>
				<Route path='/' exact component={SignUp} />
				<Route path='/signin' component={SignIn} />
			</Switch>
		</>
	);
};
