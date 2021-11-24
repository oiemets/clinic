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

export type AppState = {
	auth?: {
		authProvider?: AuthProvider;
	};
};

export type AuthProvider = {
	isAuthenticated: boolean;
	access_token: string;
	refresh_token: string;
	profile: UserProfile;
};

export type UserProfile = {
	id: string;
	first_name: string;
	last_name: string;
	photo: string;
	role_name: string;
};
