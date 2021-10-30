import { Patients } from '../api';

export type AppState = {
	patients?: Patients;
};

export type AppAction<T extends string, P = null> = {
	type: T;
} & (P extends null ? unknown : { payload: P });
