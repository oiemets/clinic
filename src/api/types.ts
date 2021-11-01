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

export type PatientsListQueryParams = {
	offset: '0' | '5' | '10';
	count: '1' | '3' | '5' | '10';
};
