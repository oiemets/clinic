import { AppState } from '../types';
import { Action } from '../actions';

export const patients = (state: AppState['patients'], action: Action) => {
	const ensured = ensure(state);
	switch (action.type) {
		case 'PatientsLoadSuccess':
			return { ...state, patients: action.payload };
		default:
			return ensured;
	}
};

const ensure = (state: AppState['patients']) => {
	if (state) {
		return state;
	}
	return {};
};
