import { apiService } from './api';

export const signInApiRequest = (data: any) =>
	apiService.post('auth/login', data);

export const getProfileRequest = (params?: any) =>
	apiService.get('auth/profile', params);

export const refreshTokenRequest = async (refreshToken: string) => {
	const token = refreshToken ?? '';
	return apiService.post('auth/token/refresh', null, {
		headers: { authorization: token },
	});
};

export const getSpecializationsRequest = async () =>
	apiService.get('specializations');

export const getDoctorsBySpecialtyRequest = async (id: string) =>
	apiService.get(`doctors/specialization/${id}`);

export const getFreeTimeForVisitRequest = async (
	date: Date,
	doctorID: string
) => apiService.get('appointments/time/free', { date, doctorID });

export const getAllAppointmentsRequest = async (
	offset: number = 0,
	limit: number = 10
) => apiService.get('appointments/patient/me', { offset, limit });

export const createNewAppointmentRequest = async (data: any) =>
	apiService.post('appointments', data);

export const getAllResolutionsRequest = async (
	offset: number = 0,
	limit: number = 10
) => apiService.get('resolutions/patient/me', { offset, limit });
