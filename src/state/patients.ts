export const GET_PATIENTS = 'GET_PATIENTS';
export const SET_PATIENTS = 'SET_PATIENTS';

export const getPatients = () => ({
	type: GET_PATIENTS,
});

export const setPatients = (patients: any) => ({
	type: SET_PATIENTS,
	patients,
});

const initialState = {
	patients: undefined,
};

export const patientsReducer = (state = initialState, action: any) => {
	switch (action.type) {
		case SET_PATIENTS:
			const { patients } = action;
			return { ...state, patients };
		default:
			return state;
	}
};
