export type Patient = {
	id: string;
	first_name: string;
	last_name: string;
	ogin: string;
	password: string;
	photo: string;
	role_id: string;
};

export type Patients = {
	users?: Patient[];
};

export type PatientsQueryParams = {
	offset: string;
	count: '1' | '3' | '5' | '10' | '15' | '20' | '25';
};
