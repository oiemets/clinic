import axios from 'axios';

export const requestGetPatients = () => {
	return axios.get(
		'https://reactlabapi.herokuapp.com/api/admin/patients?offset=0&count=3'
	);
};
