import { VariantType } from 'notistack';
export type Patient = {
	id: string;
	firstName: string;
	lastName: string;
	ogin: string;
	password: string;
	photo: string;
	roleIid: string;
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
	snackBar?: SnackBar;
	wizardProvider?: WizardProvider;
};

export type AuthProvider = {
	isAuthenticated?: boolean;
	accessToken?: string;
	refreshToken?: string;
	profile?: UserProfile;
};

export type UserProfile = {
	id?: string;
	firstName?: string;
	lastName?: string;
	photo?: string;
	roleName?: string;
};

export type SnackBar = {
	type?: VariantType;
	message?: string;
	key?: string;
};

export type Specialization = {
	id: string;
	specializationName: string;
};

export type Doctor = {
	id: string;
	firstName: string;
	lastName: string;
};

export type Specializations = Specialization[];

export type WizardProvider = {
	specializations: Specializations;
	doctorsBySpecialty: Doctor[];
	reasonForTheVisit: string;
	note?: string;
};
