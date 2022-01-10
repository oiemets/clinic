import { VariantType } from 'notistack';

export type AppState = {
	auth?: {
		authProvider?: AuthProvider;
	};
	snackBar?: SnackBar;
	createAppointment?: CreateAppointmentType;
	patientAppointments?: PatientAppointments;
	patientResolutions?: PatientResolutions;
};

export type AuthProvider = {
	isAuthenticated?: boolean;
	accessToken?: string;
	refreshToken?: string;
	profile?: userProfileSelector;
};

export type userProfileSelector = {
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

export type CreateAppointment = {
	specializations: Specializations;
	doctorsBySpecialty: Doctor[];
	reasonForTheVisit: string;
	note?: string;
	selectedDoctorID?: string;
	availableAppointments?: string[];
	selectedAppointmentTime?: string;
	appointmentConfirmationData?: AppointmentConfirmation;
};

export type CreateAppointmentType = {
	specializations: Specializations;
	doctors: Doctor[];
	reason: string;
	note?: string;
	selectedDoctorID?: string;
	availableAppointments?: string[];
	selectedAppointmentTime?: string;
	appointmentConfirmationData?: AppointmentConfirmation;
};

export type PatientAppointments = {
	appointments?: Appointment[];
};

export type Appointment = {
	id: string;
	reason: string;
	note: string;
	patientId: string;
	doctorId: string;
	visitDate: string;
	status: string;
	doctor: {
		lastName: string;
		firstName: string;
		id: string;
		photo: string;
		specializationName: string;
	};
};

export type AppointmentConfirmation = {
	id: string;
	patientId: string;
	doctorId: string;
	visitDate: string;
	reason: string;
	note: string;
	status: string;
};

export type PatientResolutions = {
	resolutions?: Resolution[];
	total?: number;
};

export type Resolution = {
	id: string;
	appointmentId: string;
	nextAppointmentDate: string;
	resolution: string;
	visitDate: string;
	doctor: {
		lastName: string;
		firstName: string;
		id: string;
		photo: string;
		specializationName: string;
	};
};
