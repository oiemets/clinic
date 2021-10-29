import { Switch, Route } from 'react-router-dom';
import { SignUp, SignIn } from './pages';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPatients } from './state/patients';

export const App = () => {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPatients());
	}, [dispatch]);

	const patients = useSelector(state => state);

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
